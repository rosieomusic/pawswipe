import axios from "axios";
export default{
    addNewAnimal(animal){
        return axios.post('/animals', animal);
    },
    updateAnimal(animalId, animal){
        return axios.put(`/animals/${animalId}`, animal);
    },
    deleteAnimalById(animalId){
        return axios.delete(`animals/${animalId}`);
    }
}