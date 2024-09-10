import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://embarrassed-karry-rosieomusic-3364938a.koyeb.app',  // Use the API base URL from your .env file
    headers: {
      "Content-Type": "application/json",
    },
  });

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