import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
  },
  actions: {
  },
  modules: {
  },
  mutations: {
    DATA_UPDATE(state, maj) {
        this.state.data=maj;
    }
  }
})
