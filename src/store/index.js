import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";


export default createStore({
  plugins: [createPersistedState()],
  state: {
    username: 'jose',
    password: '',
    userId: '',
    loggedIn: false,
    fecha: '19-3-2022',
    tipo: 'Almuerzo'
  },
  mutations: {
    saveUsername(state, username){
      state.username = username;
    },
    saveTipo(state, tipo){
      state.tipo = tipo;
    },
    saveFecha(state, fecha){
      state.fecha = fecha;
    },
    savePassword(state, password){
      state.password = password;
    },
    removeCredentialsUser(state){
      state.username = '';
      state.password = '';
    },
    saveUserId(state, userId){
      state.userId = userId;
    },
    logIn(state){
      state.loggedIn = true;
    },
    logOut(state){
      state.loggedIn = false;
    },
  },
  actions: {
    saveUsername({commit}, username){
      commit("saveUsername", username);
    },
    saveTipo({commit}, tipo){
      commit("saveTipo", tipo);
    },
    saveFecha({commit}, fecha){
      commit("saveFecha", fecha);
    },
    savePassword({commit}, password){
      commit("savePassword", password);
    },
    removeCredentialsUser({commit}){
      commit("removeCredentialsUser");
    },
    saveUserId({commit}, userId) {
      commit("saveUserId", userId);
    },
    logIn({commit}){
      commit("logIn");
    },
    logOut({commit}){
      commit("logOut");
    },
  },
  modules: {
  }
})
