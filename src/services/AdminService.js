import axios from "axios";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,  // Use the API base URL from your .env file
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