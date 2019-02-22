import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const BASE_URL = 'http://demo4507124.mockable.io/';

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
  },
  mutations: {
    updateProducts(state, products) {
      Vue.set(state, 'products', products);
    },
    updateCategories(state, categories) {
      Vue.set(state, 'categories', categories);
    },
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const response = await axios.get(`${BASE_URL}/products`);
        commit('updateProducts', response.data);
      } catch (error) {
        console.log('Error fetching products: ', error);
      }
    },
    async getCategories({ commit }) {
      try {
        const response = await axios.get(`${BASE_URL}/categories`);
        commit('updateCategories', response.data);
      } catch (error) {
        console.log('Error fetching categories: ', error);
      }
    },
  },
});
