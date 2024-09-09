<template>
    <div id="details-card">
        <div id="container" v-if="animal">
            <h1 id="title">{{ animal.animalName }}</h1>
            <div id="image">
                <img v-bind:src="animal.imageUrl" alt="beautiful animal">
                <div id="info">
                    <p>{{ animal.description }}</p>
                    <p> Gender: {{ animal.gender }}</p>
                    <p> Size: {{ animal.size }}</p>
                    <p> Age: {{ animal.age }}</p>
                    <p> Breed: {{ animal.breed }}</p>
                    <p> Fostered: {{ animal.fostered }}</p>
                    <p v-if="$store.getters.isAdmin"> Animal ID# {{ animal.animalId }}</p>

                </div>
            </div>
        </div>

    </div>
</template>
<script>
import AnimalService from '../services/AnimalService';

export default {
    data() {
        return {
            animal: null,
            isLoading: true,
        };
    },
    created() {
        this.fetchAnimal();
    },
    methods: {
        fetchAnimal() {
            const animalId = this.$route.params.animalId;
            AnimalService
                .getAnimalById(animalId)
                .then((response) => {
                    if (response.status === 200) {
                        this.animal = response.data;
                    } else {
                        console.error('Failed to fetch animal details');
                    }
                })
                .catch(error => {
                    console.error('Error fetching animal details:', error);
                })
                .finally(() => {
                    this.isLoading = false;
                })
        }
    }

}
</script>
<style scoped>
#details-card {
    background-color: #B6ABC1;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 5%;
    margin-bottom: 7%;
    display: flex;
    flex-direction: column;
    height: 100;
    border-radius: 10px;
}

#container {
    display: flex;
    flex-direction: column;
}

#title {
    font-size: 24px;
    font-weight: 700px;
    justify-content: center;
    align-self: center;
}

#image {
    background-color: #C0C5CE;
    width: 700px;
    display: flex;
    flex-direction: column;
    align-self: center;
    padding: 40px;
    border-radius: 10px;
    margin-bottom: 7%;

}

img {
    border-radius: 10px;
}

#info {
    background-color: #C0C5CE;
    padding: 10px;
}

p {
    font-size: 16px;
}

@media only screen and (max-width: 425px) {
    #image {
        background-color: #C0C5CE;
        width: 400px;
    }

    #details-card {
        background-color: #B6ABC1;
        margin-left: 0%;
        margin-right: 0%;
        margin-top: 5%;
        margin-bottom: 10%;
        height: 800px;
        display: flex;
        flex-direction: column
    }
}</style>