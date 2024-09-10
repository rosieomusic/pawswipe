<template>
  <div id="paw-swipe-app">
    <AppHeader />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";

// Anywhere in your Vue application




export default {
  components: {
    AppHeader,
    AppFooter
},
};

</script>

<style scoped>


#paw-swipe-app{
  width: 100vw;
  height: 100;
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "header"
    "main"
    "footer";
  background-color: var(--main_bg);

}

#app-header {
  grid-area: header;
  position: relative;
  width: 100vw;
}

#app-main {
  grid-area: main;
  width: 100vw;
  height: 100vh;
}

#app-footer {
  grid-area: footer;
  position: fixed;
  width: 100%;
  padding: 10px;
  bottom: 0; 
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 425px) {
  #paw-swipe-app {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "header"
      "main"
      "footer";
  }
  



 
}

</style>