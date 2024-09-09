<template>
  <div id="register">
    <nav>
    <AppNav/>
  </nav>
    <form v-on:submit.prevent="register">
      <h1>Create Account</h1>
      <div id="fields">
        <div id="group-one">
          <div class="field">
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
      <div class="field">
        <label for="firstName">Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          v-model="user.firstName"
          required
        />
      </div>
      <div class="field">
        <label for="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          v-model="user.lastName"
        />
      </div>
      </div>
      <div id="group-two">
        <div class="field">
        <label for="email">Email</label>
        <input
        type="email"
        id="email"
        placeholder="Email"
        v-model="user.email"
        />
      </div>
        <div class="field">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          v-model="user.password"
          required
        />
      </div>
      <div class="field">
        <label for="confirmPassword">Confirm password</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          v-model="user.confirmPassword"
          required
        />
      </div>
      </div>
        <div id="button-box">
          <button type="submit">Register</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import authService from "../services/AuthService";
import AppNav from "../components/AppNav.vue";

export default {
  components: {
    AppNav,
  },
  data() {
    return {
      user: {
        username: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        email: "",
        role: "user",
      },
    };
  },
  methods: {
    error(msg) {
      alert(msg);
    },
    success(msg) {
      alert(msg);
    },
    register() {
      if (this.user.password != this.user.confirmPassword) {
        this.error("Password & Confirm Password do not match");
      } else {
        authService
          .register(this.user)
          .then((response) => {
            if (response.status == 201) {
              this.success("Thank you for registering, please sign in.");
              this.$router.push({
                path: "/login",
              });
            }
          })
          .catch((error) => {
            const response = error.response;
            if (!response) {
              this.error(error);
            } else if (response.status === 400) {
              if (response.data.errors) {
                // Show the validation errors
                let msg = "Validation error: ";
                for (let err of response.data.errors) {
                  msg += `'${err.field}':${err.defaultMessage}. `;
                }
                this.error(msg);
              } else {
                this.error(response.data.message);
              }
            } else {
              this.error(response.data.message);
            }
          });
      }
    },
  },
};
</script>

<style scoped>
#register {
  display: grid;
  margin: 0%;
  height: 100%;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    "nav"
    "form";
}

h1 {
  font-size: 32px;
  font-weight: 800;
  margin: 0%;
  padding: 0%;
}

form {
  grid-area: form;
  display: flex;
  margin: 2%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0%;

  box-sizing: border-box;

}

.field {
  padding-right: 5%;
  padding-left: 5%;
  padding-bottom: 5%;
  padding-top: 3%;
  display: flex;
  flex-direction: column;

}

#username,
#firstName,
#lastName,
#email,
#password,
#confirmPassword {
  border-radius: 10px;
  height: 45px;
  width: 350px;
  border: none;
  margin-top: 3%;
}

nav {
  grid-area: nav;
  margin-bottom: 0;
}

#group-one {
  display: flex;
  justify-content: center;

}

#group-two {
  display: flex;
  justify-content: center;
}

#button-box {
  display: flex;
  justify-content: center;
}

button {
  height: 45px;
  width: 350px;
  border-radius: 10px;
  background-color: var(--accent_cr);
  color: white;
  border: none;
  margin-top: 4%;
  margin-bottom: 7%;
}

button:hover {
  background-color: black;
}

@media only screen and (max-width: 425px) {
  nav {
    display: none;
  }

  .field {
    padding-right: 0%;
    padding-left: 0%;
    padding-bottom: 1%;
    padding-top: 0%;
    display: flex;
    flex-direction: column;

  }

  #group-one {
    display: flex;
    flex-direction: column;
    justify-content: center;

  }

  #group-two {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    font-size: 24px;
    font-weight: 800;
    padding: 0%;
    margin: 1%;
  }

  #register {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-areas:
      "form";
  }

  button {
    margin-bottom: 30%;
  }

}</style>
