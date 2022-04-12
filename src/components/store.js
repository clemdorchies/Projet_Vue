import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      episodes: [],
      personnages: [],
      infoPagePersonnages: {}
    }
  },
  getters: {
    getEpisodes(state) {
      return state.episodes;
    },
    getPersonnages(state){
      return state.personnages;
    },
    getInfoPagePersonnages(state){
      return state.infoPagePersonnages;
    },
  },
  mutations: {
    addEpisodes(state, payload) {
      state.episodes = payload;
    },
    addPersonnages(state, payload){
      state.personnages = payload;
    },
    addInfoPagePersonnages(state, payload){
      state.infoPagePersonnages = payload;
    },
  }
});
export default store;