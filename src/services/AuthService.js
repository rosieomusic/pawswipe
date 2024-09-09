import axios from 'axios';

// axios.create() not needed, baseURL set in src/main.js

export default {

  login(user) {
    return axios.post('/login', user)
  },

  register(user) {
    return axios.post('/register', user)
  }

}
