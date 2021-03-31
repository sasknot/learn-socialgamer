import Vue from 'vue'
import Vuex from 'vuex'
// import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage
// })
const storeConfig = {
  state: {},

  mutations: {},

  plugins: [
    // vuexLocal.plugin
  ]
}

if (process.env.NODE_ENV == 'development') {
  storeConfig.strict = true
}

export default new Vuex.Store(storeConfig)
