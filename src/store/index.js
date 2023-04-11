import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    catBreeds: []
  },
  actions: {
    async getCatBreeds(){
      await fetch("https://catfact.ninja/breeds")
        .then(response => response.json())
        .then(breeds => this.commit('UPDATE_CAT_BREEDS', breeds));
    },
  },
  mutations: {
    UPDATE_CAT_BREEDS(state, data) {
      console.log('data', data);
      state.catBreeds = data;
    }
  },
  getters: {
  },
  modules: {
  }
})
