import { createStore } from 'vuex'

export default createStore({
  state: {
    columns: [],
    users: {}
  },
  getters: {
  },
  actions: {
  },
  modules: {
  },
  mutations: {
    setColumns(state, new_value){
      state.columns=new_value
    },
    setUsers(state, new_entry){
      state.users=new_entry
    }
  }
})
