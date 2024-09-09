import { createStore as _createStore } from 'vuex';
import axios from 'axios';

const API_URL = 'https://embarrassed-karry-rosieomusic-3364938a.koyeb.app'; 

export function createStore(currentToken, currentUser) {
  let store = _createStore({
    state: {
      token: currentToken || '',
      user: currentUser || {},
    },
    actions: {
      async fetchData({ commit }) {
        try {
          const response = await fetch(`${API_URL}/some-endpoint`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          commit('setData', data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
    },
    mutations: {
      SET_AUTH_TOKEN(state, token) {
        state.token = token;
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      },
      SET_USER(state, user) {
        state.user = user;
        localStorage.setItem('user', JSON.stringify(user));
      },
      LOGOUT(state) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        state.token = '';
        state.user = {};
        axios.defaults.headers.common = {};
      }
    },
    getters : {
      isAuthenticated(state){
        return Boolean(state.token);
      },
      isAdmin(state){
        if(state.user.authorities && state.user.authorities.length > 0){
          return state.user.authorities[0].name === 'ROLE_ADMIN';
        }
        return false;
      },
      
    
    }

  })
  return store;
}