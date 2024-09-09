<template>
    <div id="favorites">
        <nav>
            <AppNav />
        </nav>
        <h1 id="userFav"> User Favorites</h1>
        
        <section>
            <AnimalCards v-bind:animalData="animalData" />
        </section>
    </div>
</template>

<script>
import AppNav from '../components/AppNav.vue';
import AnimalService from '../services/AnimalService';
import AnimalCards from '../components/AnimalCards.vue';

export default {
    components: {
        AppNav,
        AnimalCards,
        
    },
    data() {
        return {
            animalData: [],
            searchFilter: '',
            isLoading: false,
        };
    },
    methods: {
        getUserAnimals() {
            AnimalService
                .getUserAnimals()
                .then((response) => {
                    const animalIds = response.data.map(item => item.animalId);
              
                    //console.log(animalIds);

                    const animalDetailPromises = animalIds.map(animalId =>
                    AnimalService.getAnimalById(animalId)
                    );
                    return Promise.all(animalDetailPromises);
                })
                .then((animalDetailsArray) => {
                    this.animalData = animalDetailsArray.map(detailResponse => detailResponse.data);
                    //console.log(this.animalData);
                    this.isLoading = false;
                })
                .catch((error) => {
                    this.isLoading = false;
                    console.error(error);
                });

        },

    },
    created() {
        this.getUserAnimals();
    },
    computed: {
        isLoggedIn() {
            return this.$store.state.token.length > 0;
        },

    }

}
</script>
<style scoped>
#favorites {
  height: 100%;
  width: 100%;
}

#userFav{
  margin-left: 43%;
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

  #userFav{
    margin-left: 10%;
  }
}

</style>