<template>
  <nav id="app-nav">
    <div id="links">
      <router-link class="link" id="home" v-bind:to="{ name: 'home' }">Home</router-link>
      <div id="admin-link" v-if="$store.getters.isAdmin">
        <router-link class="link" v-bind:to="{ name: 'admin' }">Admin</router-link>
      </div>
      <router-link class="link" v-bind:to="{ name: 'home' }">Shelters</router-link>
      <div id="fav-link" v-if="$store.getters.isAuthenticated && !$store.getters.isAdmin">
        <router-link class="link" v-bind:to="{ name: 'favorites' }">Favorites</router-link>
      </div>
      <router-link class="link" v-bind:to="{ name: 'home' }">Resources</router-link>
      <router-link class="link" v-bind:to="{ name: 'home' }">Fostering</router-link>
      <router-link class="link" v-bind:to="{ name: 'home' }">Contact</router-link>
    </div>


    <!-- copied from app.vue -->
    <div id="buttons" v-if="!isLoggedIn">
      <router-link v-bind:to="{ name: 'login' }">
        <button id="sign-in">Sign In</button>
      </router-link>
      <router-link v-bind:to="{ name: 'register' }">
        <button id="register"> Register</button>
      </router-link>
    </div>
    <div id="logout-button" v-else>
      <router-link v-bind:to="{ name: 'logout' }">
        <button id="logout">Logout</button>
      </router-link>
    </div>
  </nav>
</template>
  
  <script>
  export default {
    name: 'AppNav',
    computed: {
    isLoggedIn() {
      return this.$store.state.token.length > 0;
    },
  },


  };
  </script>
  
  <style scoped>
  #app-nav {
    background-color: #A4B0C8;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
    width: 100vw;
  }
  a{
    color: white;
    text-decoration: none;
  }
  .link{
    margin-right: 7%;
    padding-left: 7px;
    padding-right: 7px;
    border-radius: 10px;
  }
  .link:active{
    background-color: #69788F;
  
    border-radius: 10px;
  }
  .link:hover{
    background-color: #69788F;
  }

  #admin-link{
    margin-right: 7%;
  }
  #fav-link{
    margin-right: 7%;
  }
  #links{
    margin-left: 3%;
    align-content: center;
    margin-right: 5%;
    display: flex;
    flex-direction: row;
  }
  #buttons{
    display: flex;
  
    
  }
  button{
    border-radius: 15px;
    height: 34px;
    width: 100px;
    cursor: pointer;
  }
  #sign-in{
    margin-right: 10px;
    background-color: #BFC3D0;
    border: 3px;
  }
  #sign-in:hover{
    background-color: aliceblue;

  }
  #register{
    background-color: #69788F;
    color: white;
    margin-right: 20px;
    border: 3px;
  }
  #register:hover{
    background-color: black;
  }
  #logout{
    background-color: #69788F;
    color: white;
    margin-right: 20px;
    border: 3px;

  }
  #logout:hover{
    background-color: black;
  }

  @media only screen and (max-width: 425px){
  
  }

  </style>
