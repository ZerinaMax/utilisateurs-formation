import { createStore } from 'vuex'

export default createStore({
  state: {
    columns: [],
    users: [],
    counter: 11
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
    },
    deleteUser(state, id){
      state.users.splice(state.users.findIndex(user => user.id == id), 1);
    },
    addUser(state, user) {
      state.users.splice(state.users.length,0,user);
      state.counter++
    },
    updateCurrentUser(state, updateInfo){
      const indexUtilisateur = state.users.findIndex(object =>{
        return object.id == updateInfo.id
      })
      state.users.splice(indexUtilisateur, 1, updateInfo);
    }
  }
})
