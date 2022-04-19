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
    // Getters pour un personnages
    getPersonnages(state){
      return state.personnages;
    },
    // Getters pour les infos personnages
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
    // Ajout d'un personnages dans l'historique des visites
    addPersonnages(state, payload){
      //Verification de l'existance du personnage dans l'historique des visite du personnages
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
    // Ajout des infos des personnages 
    addInfoPagePersonnages(state, payload){
      state.infoPagePersonnages = payload;
    },
  }
});
export default store;