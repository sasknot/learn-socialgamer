const path = require('path');

const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Autoprefixer = require('autoprefixer');

const __ENVIRONMENT__ = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

module.exports = {
  mode: __ENVIRONMENT__,

  devtool: false,

  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    compress: true,
    port: 8001,
    stats: 'errors-only',
    historyApiFallback: true,
    serveIndex: true,
    overlay: true,
    writeToDisk: true,
    host: '0.0.0.0'
  },

  entry: {
    index: './src/index.js'
  },
  output: {
    filename: path.join('assets', '[name].js'),
    path: path.join(__dirname, 'docs')
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendors',
          enforce: true
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: function(file) {
          return /node_modules/.test(file) && !/\.vue\.js/.test(file)
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: function() {
                return [
                  Autoprefixer()
                ];
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                indentedSyntax: true,
                includePaths: [
                  path.join(__dirname, 'src', 'assets', 'stylesheets')
                ]
              }
            }
          }
        ]
      }
    ]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json', '.sass', '.scss']
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.SourceMapDevToolPlugin({
      exclude: ['vendor.js']
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: [
        path.join('!assets', 'img', '**', '*')
      ]
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join('src', 'index.html'),
      filename: 'index.html',
      chunks: ['vendors', 'index']
    }),
    new MiniCssExtractPlugin({
      filename: path.join('assets', '[name].css')
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.join('src', 'assets', 'images'),
        to: path.join('assets', 'img')
      }]
    })
  ]
};
