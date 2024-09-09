<template>
    <div id="deleteAnimal">
        <h1 id="title">Delete Animal</h1>
        <form v-on:submit.prevent="handleSubmit"   id="deleteAnimalForm">
            <label id="animalIdLabel" for="animalId">Animal ID #</label>
            <input class="field" 
            type="text" 
            id="animalId" 
            v-model="animal.animalId" required />
            <div id="button">
                <button type="submit">Delete Animal</button>
            </div>
        </form>



    </div>
</template>
<script>
export default {
    data() {
        return {
            animal: {
                animalId: ''
            }
        }
    },
    methods: {
        handleSubmit(){
            if(!this.animal.animalId){
                alert('please enter animal ID')
            } else{
                this.$emit('delete-animal', this.animal);
                this.animal = {animalId: ''};
            }
        }

    }

};

</script>
<style scoped>
#title {
    font-size: 24px;
    font-weight: 900;
    align-self: center;
    margin-top: 1%;
    margin-bottom: 0px;
}

#deleteAnimal {
    height: 100%;
    background-color: #C0C5CE;
    width: 300px;
    margin-top: 1%;
    margin-left: 2%;
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
}

#deleteAnimalForm {
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    margin-right: 10%; 
    margin-bottom: 5%;
    align-items: center;
    
}
label {
    margin-top: 2%;
    margin-bottom: 2%;
    margin-right: 5%;
    margin-left: 0%;
}


.field {
    border: none;
    border-radius: 10px;
    height: 40px;
    width: 100px;
}

button {
    height: 45px;
    width: 150px;
    border-radius: 10px;
    background-color: var(--accent_cr);
    color: white;
    border: none;
    margin-top: 10%;
    margin-bottom: 7%;
    cursor: pointer;
}
button:hover{
    background-color: black;
}
@media only screen and (max-width: 425px){
    #title{
        margin-right: 25%;
        margin-bottom: 7%;
    }
    #deleteAnimal{
        width: 100vw;
        margin: 0%;
        align-items: start;

    
    }
    #deleteAnimalForm{
        align-items: start;
    }

}
</style>