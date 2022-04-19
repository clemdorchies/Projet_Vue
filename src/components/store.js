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