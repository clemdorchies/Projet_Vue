import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      episodes: [],
      personnages: [],
      infoPagePersonnages: {}
    }
  },
  // Mise en place des getters
  getters: {
    // Getters pour un épisode
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
  // Mise en place des mutations
  mutations: {
    // Ajout d'un épisode dans le store
    addEpisodes(state, payload) {
      state.episodes = payload;
    },
    addPersonnages(state, payload){
      let found = false;
      state.personnages.forEach(element => {
        if(element.id == payload.id){
          found = true;
        }
      });
      if(found === false){
        state.personnages.push(payload);
      }
    },
    addInfoPagePersonnages(state, payload){
      state.infoPagePersonnages = payload;
    },
  }
});
export default store;