import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      episodes: [],
    }
  },
  getters: {
    getEpisodes (state) {
      return state.episodes;
    }
  },
  mutations: {
    addEpisodes(state, payload) {
      state.episodes = payload;
    }
  }
});
export default store;