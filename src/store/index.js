import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedcurrency: 'test',
  },
  mutations: {
    saveCurrency(state, chosenCurrency) {
      state.selectedcurrency = chosenCurrency
    }
  },
  actions: {},
  modules: {}
})