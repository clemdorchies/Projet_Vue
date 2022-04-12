import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      episodes: [],
      personnages: []
    }
  },
  getters: {
    getEpisodes (state) {
      return state.episodes;
    },
    getPersonnages(state){
      return state.personnages;
    }
  },
  mutations: {
    addEpisodes(state, payload) {
      state.episodes = payload;
    },
    addPersonnages(state, payload){
      state.personnages = payload;
    } 
  }
});
export default store;