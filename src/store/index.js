import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
    count: state => state.count
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})

export default store
