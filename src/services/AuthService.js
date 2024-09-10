import axios from 'axios';

// axios.create() not needed, baseURL set in src/main.js

const apiClient = axios.create({
  baseURL: 'https://embarrassed-karry-rosieomusic-3364938a.koyeb.app',  // Use the API base URL from your .env file
  headers: {
    "Content-Type": "application/json",
  },
});

export default {

  login(user) {
    return axios.post('/login', user)
  },

  register(user) {
    return axios.post('/register', user)
  }

}
