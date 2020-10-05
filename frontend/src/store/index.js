import Vue from 'vue'
import Vuex from 'vuex'
import decode from 'jwt-decode'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowNav : true,
    usuario: null,
    token: null,
    links: [],
  },
  mutations: {
    shownav(){
      this.state.isShowNav = true;
    },
    hidennav(){
      this.state.isShowNav = false;
    },
    setToken(state,token){
      state.token = token;
    },
    setUsuario(state,usuario){
      state.usuario = usuario;
    },
    aumentarLinks(state,link){
      state.links.unshift(link);
    },
    setlinks(state,links){
      state.links = links
    }
  },
  actions: {
    guardarlinks({commit},links){
      commit("setlinks",links);
    },
    addlink({commit},link){
      commit("aumentarLinks",link);
    },
    guardarToken({commit},token){
      commit("setToken",token);
      commit('setUsuario',decode(token));
      localStorage.setItem("token", token);
    },
    autoLogin({commit}){
      let token = localStorage.getItem("token");
      console.log(token);
      if(token){
        commit("setToken",token);
        commit("setUsuario",decode(token));
        router.push({name: 'dashboard'});
      }
      
    },
    salir({commit}){
      commit("setToken",null);
      commit("setUsuario", null);
      localStorage.removeItem("token");
      router.push({name: 'login'});
    }
  },
  modules: {
  }
})
