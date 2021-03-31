import './assets/stylesheets/index.sass'
import 'bootstrap/js/dist/collapse'
// import 'bootstrap/js/dist/dropdown'
// import 'bootstrap/js/dist/util'

import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store'
import router from './router'

import SVGIcons from './components/svg-icons.vue'
import SVGIcon from './components/svg-icon.vue'
import MainHeader from './components/main-header.vue'
import MainFooter from './components/main-footer.vue'

import apollo from './apollo'

// Disable Vue Devtools
Vue.config.devtools = false;
Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.component('svg-icons', SVGIcons);
Vue.component('svg-icon', SVGIcon);

const app = new Vue({
  el: '#app',

  router,
  store,

  components: {
    MainHeader,
    MainFooter
  }
});
