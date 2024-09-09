<template>
    <div id="detailsView">
        <nav>
            <AppNav />
        </nav>
        <section>
            <AnimalDetails v-bind:animalData="animalData" />
        </section>

    </div>
</template>
<script>

import AnimalDetails from '../components/AnimalDetails.vue'
import AppNav from '../components/AppNav.vue';
export default {
    components: {
        AnimalDetails,
        AppNav
    },
    props: ['animalData'],
    data() {
        return {

        }
    }
}
</script>
<style scoped>
nav {
    display: block;
}

@media only screen and (max-width: 425px) {
    nav {
        display: none;
    }
}
</style>