<template>
  <div class="home">
    <nav>
      <AppNav/>
    </nav>
    <h1 id="animalsTitle">Adoptable Animals</h1>
    <SearchBar v-on:search="handleSearch" v-on:filter="handleFilter"/>
    <section>
      <AnimalCards v-bind:animalData="animalData" />
    </section>

  </div>
</template>

<script>
import AppNav from '../components/AppNav.vue';
import AnimalService from '../services/AnimalService.js';
import AnimalCards from '../components/AnimalCards.vue';
import SearchBar from '../components/SearchBar.vue';



export default {
  components: {
    AppNav,
    AnimalCards,
    SearchBar,
  },
  data() {
    return {
      animalData: [],
      searchFilter: '',
      isLoading: false,
    };
  },
  methods: {
    getAllAnimals() {
      if (this.searchFilter) {
        this.searchAnimals();
        return;
      }

      this.isLoading = true;

      AnimalService
        .getAllAnimals()
        .then((response) => {
          if(response.status === 200){
          this.animalData = response.data;
          }
        })
        .catch((error) => {
          this.isLoading = false;
          console.error(error);
        });

    },
    searchAnimals(){
      this.isLoading = true;
      AnimalService
      .getAllAnimals()
      .then((response) => {
        const searchTerm = this.searchFilter.toLowerCase();
        this.animalData = response.data.filter(animal => 
          animal.breed.toLowerCase().includes(searchTerm)
        );
        this.isLoading = false;
      })
      .catch((error) => {
        console.error(error);
      });
    },
    getAllDogs(){
      AnimalService
      .getAllDogs()
      .then((response) => {
        this.animalData = response.data;
        this.isLoading = false;
      })
      .catch((error) => {
        console.error(error);
      });
    },
    getAllCats(){
      AnimalService
      .getAllCats()
      .then((response) => {
        this.animalData = response.data;
        this.isLoading = false;
      })
      .catch((error) => {
        console.error(error);
      });
    },
    handleSearch(searchFilter) {
      this.searchFilter = searchFilter;
      if(this.searchFilter) {
        this.searchAnimals();
      } else{
        this.getAllAnimals();
      }
   
    },
    handleFilter(filter){
      if(filter === 'dog'){
        this.getAllDogs();
      } else if(filter === 'cat'){
        this.getAllCats();
      } else{
        this.getAllAnimals();
      }
    }

  },
  created() {
      this.getAllAnimals();
    },
    computed: {
      isLoggedIn() {
        return this.$store.state.token.length > 0;
      },
    },

};




</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
}



#animalsTitle {
  margin-left: 40%;
  font-size: 32px;
  font-weight: 900;
}

nav {
  display: block;
  grid-area: nav;
}

section {
  grid-area: section;

}

@media only screen and (max-width: 425px) {
  nav {
    display: none;
  }

 #animalsTitle {
    margin-left: 10%;
  }
}</style>