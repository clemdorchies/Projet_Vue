import { createStore } from 'vuex';
const store = createStore({
  state() {
    return {
      episodes: [],
    }
  },
  getters: {
    getEpisodes: (state) => state.episodes, 
  },
  mutations: {
    addEpisodes(state, payload) {
      state.episodes.add(payload);
    }
  }
});
export default store;