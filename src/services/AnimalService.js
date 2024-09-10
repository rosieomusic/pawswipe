import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://embarrassed-karry-rosieomusic-3364938a.koyeb.app',  // Use the API base URL from your .env file
    headers: {
      "Content-Type": "application/json",
    },
  });

export default{
    getAllAnimals(){
        return axios.get('/animals');
    },
    getAnimalById(animalId){
        return axios.get(`animals/${animalId}`);
    },
    getAllDogs(){
        return axios.get('/animals/dogs');
    },
    getAllCats(){
        return axios.get('/animals/cats');
    },
    searchAnimals(breed){
        return axios.get(`/animals/filter?breed=`+ breed);
    },
    getUserAnimals(){
        return axios.get('/favorites');
    },
    addAnimalToUserFavorites(favorites){
        return axios.post('favorites', favorites);
    }
}