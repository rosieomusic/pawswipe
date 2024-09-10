<template>
  <div id="login">
    <form v-on:submit.prevent="login">
      <h1>Please Sign In</h1>
      <div id="fields">
        <div id="u-field">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          v-model="user.username"
          required
          autofocus
        />
      </div>
      <div id="p-field">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          v-model="user.password"
          required
        />
      </div>
        <div id="sign-in-div" ><button id="sign-in" type="submit">Sign in</button></div>
        <div id="register-link">
      <router-link v-bind:to="{ name: 'register' }">Need an account? Register!</router-link>
    </div>
      </div>
      <div id="bottom-links">
    <router-link id="logout" v-bind:to="{ name: 'logout' }">Logout  </router-link>
    <router-link v-bind:to="{ name: 'home' }">Continue without logging in</router-link>
    </div>
      

    </form>

  </div>
</template>

<script>
import authService from "../services/AuthService";

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      authService
        .login(this.user)
        .then((response) => {
          if (response.status == 200) {
            this.$store.commit("SET_AUTH_TOKEN", response.data.token);
            this.$store.commit("SET_USER", response.data.user);
            this.$router.push("/");
          }
        })
        .catch((error) => {
          const response = error.response;
          if (!response) {
            alert(error);
          } else if (response.status === 401) {
            alert("Invalid username and password!");
          } else {
            alert(response.message);
          }
        });
    },
  },
};
</script>


<style scoped>
h1{
  font-size: 32px;
  font-weight: 900;
  justify-self: center;
  align-self: center;
  margin-top: 5%;
}

form{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-bottom: 15%;
  
}
#login{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
}
#fields{
  background-color: #A9B5CC;
  border-radius: 10px;
  width: 400px;
  padding: 2%;
  
}
#username, #password{
  border-radius: 10px;
  height: 45px;
  width: 350px;
  border: none;
  
}
#u-field, #p-field{
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
#logout{
  margin-right: 5%;
}


#sign-in{
  height: 45px;
  width: 100%;
  border-radius: 10px;
  background-color: var(--accent_cr);
  color: white;
  border: none;
  
}
#sign-in:hover{
  background-color: black;
}
#sign-in-div{
  justify-content: center;
  padding: 2%;
}
#bottom-links{
  display: flex;
  width: 100%;
  justify-content: center;
  
}
#register-link{
margin-bottom: 5%;
margin-left: 5%;
}
label{
  margin-bottom: 2%;
}
@media only screen and (max-width: 425px){
  form{
    margin-bottom: 30%;
    
  
    padding-top: 30px;
  }
}

</style>
