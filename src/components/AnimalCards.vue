<template>
    <div id="cards">
        <div v-for="(eachAnimal, index) in animalData" v-bind:key="eachAnimal.animalId" class="card">
            <i v-if="$store.getters.isAuthenticated && !$store.getters.isAdmin"
                v-bind:class="selectedHearts[index] ? 'fa-solid fa-heart' : 'fa-regular fa-heart'"
                v-on:click="toggleHeart(index)" id="heart">
            </i>
            <div id="image">
                <img v-on:click="handleClick(eachAnimal.animalId)" 
                v-bind:src="eachAnimal.imageUrl" 
                alt="beautiful animal">
            </div>
            <div id="name">
                <h1>{{ eachAnimal.animalName }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['animalData'],
    data() {
        return {
            selectedFilter: '',
            selectedHearts: Array(this.animalData.length).fill(false),
        };
    },
    methods: {
        toggleFilter(filter) {
            this.selectedFilter = this.selectedFilter === filter ? '' : filter;
        },
        toggleHeart(index) {
            this.selectedHearts[index] = !this.selectedHearts[index];
        },
        handleClick(animalId) {
            this.$router.push({ name: 'details', params: { animalId: animalId } })
        }

    }
};
</script>

<style scoped>
#heart {
    font-size: 32px;
    margin-left: 92%;
    cursor: pointer;
}

#cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    background-color: #B6ABC1;
    margin-left: 15%;
    margin-right: 15%;
    margin-bottom: 10%;
    height: 100%;
    transition: 0.5s;
    justify-content: center;
}

.card {
    height: 350px;
    width: 300px;
    background-color: #C0C5CE;
    border: 1px solid black;
    border-radius: 10px;
    padding: 5%;
    margin: 5%;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);


}

.card:hover {
    cursor: pointer;
    transform: translateY(-20px);
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-top: 8px;
    image-rendering: auto;
}

img {
    object-fit: fill;
}


@media only screen and (max-width: 425px) {
    #cards {
        grid-template-columns: 1fr;
        margin-right: 5%;
        margin-left: 5%;
    }

    .card {
        margin-right: 40px;
        margin-left: 40px;
    }
}</style>