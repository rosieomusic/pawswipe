<template>
    <div id="admin">
        <nav>
            <AppNav/>
        </nav>
        <div id="crud">
            <AddNewAnimal v-on:new-animal="addNewAnimal"/>
            <UpdateAnimal v-on:update-animal="updateAnimal"/>
            <DeleteAnimal v-on:delete-animal="deleteAnimalById"/>

        </div>
    </div>

</template>
<script>
import AppNav from '../components/AppNav.vue';
import AdminService from '../services/AdminService.js';
import AddNewAnimal from '../components/AddNewAnimal.vue';
import UpdateAnimal from  '../components/UpdateAnimal.vue';
import DeleteAnimal from '../components/DeleteAnimal.vue';

export default{
    components: {
        AppNav,
        AddNewAnimal,
        UpdateAnimal,
        DeleteAnimal
    },
    props:["animalData"],
    data(){
        return{

        }
    },
    methods: {
        addNewAnimal(animalData) {
            AdminService
                .addNewAnimal(animalData)
                .then(() => {
                    window.alert('Animal Added Successfully!!')
                })
                .catch((error) => {
                    window.alert('Failed to add animal: ' + error.message);
                })
        },
        updateAnimal(animalData) {
            AdminService
                .updateAnimal(animalData.animalId, animalData)
                .then(() => {
                    window.alert('Animal Updated Successfully!!')
                })
                .catch((error) => {
                    window.alert('Failed to update animal: ' + error.message)
                })
        },
        deleteAnimalById(animalData){
            const confirmation = window.confirm('Are you sure you want to delete this animal!');

            if(confirmation){
            AdminService
            .deleteAnimalById(animalData.animalId)
            .then(() => {
                window.alert('Animal Successfully Deleted')
            })
            .catch((error) => {
                window.alert('Failed to delete animal: ' + error.message)
            });
        } else {
            window.alert('Animal deletion canceled')
        }
        }

    },

}
</script>

<style scoped>
#crud{
    display: flex;
}
@media only screen and (max-width: 425px){
  #crud{
    display: flex;
    flex-direction: column;
    padding: 0%;
    margin-bottom: 20%;
 }
 nav{
    display: none;
 }
  
}


</style>