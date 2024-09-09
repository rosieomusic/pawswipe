<template>
<div id="updateAnimal">
    <h1 id="title">Update Animal</h1>
    <form v-on:submit.prevent="handleSubmit" id="updateAnimalForm">
<div id="fields">
    <label for="name">Name</label>
    <input
    class="field"
    type="text"
    id="name"
    v-model="animal.animalName"
    required
    />
    <label for="imageUrl">Image URL</label>
    <input
    class="field"
    type="text"
    id="imgUrl"
    v-model="animal.imageUrl"
    />
    <label for="age">Age</label>
    <input
    class="field"
    type="text"
    id="age"
    v-model="animal.age"
    />
    <label for="breed">Breed</label>
    <input
    class="field"
    type="text"
    id="breed"
    v-model="animal.breed"
    />
    <label for="description">Description</label>
    <textarea
    class="textarea"
    type="textarea"
    id="description"
    v-model="animal.description"
    />
    <label  for="shelterId">Shelter ID# </label>
    <input
    class="field"
    type="text"
    id="shelterId"
    v-model="animal.shelterId"
    required
    />
    <div id="button">
        <button type="submit">Update Animal</button>
</div>
</div>
<div id="radio-buttons">
    <label id="animalIdLabel" for="animalId">Animal ID #</label>
    <input
    class="field"
    type="text"
    id="animalId"
    v-model="animal.animalId"
    required
    />

    <div id="animalType">
    <label class="radio-label"  for="animalType">Animal Type:</label><br>
    <input
    class="radio"
    type="radio"
    id="catType"
    name="animalType"
    value="Cat"
    v-model="animal.type"
    required
    />
    <label for="cat">Cat</label>
    <input
    class="radio"
    type="radio"
    id="dogType"
    name="animalType"
    value="Dog"
    v-model="animal.type"
    />
    <label for="dog">Dog</label>
    </div>
    <label class="radio-label" for="gender">Gender:</label>  
    <div id="gender">
        
        <input
        class="radio"
        type="radio"
        name="gender"
        value="M"
        v-model="animal.gender"
        required
        />
        <label for="male">Male</label>
        <input
        class="radio"
        type="radio"
        name="gender"
        value="F"
        v-model="animal.gender"
        />
        <label for="female">Female</label>
    </div>
    <div id="size">
        <label class="radio-label"  for="size">Size:</label><br>
        <input
        class="radio"
        type="radio"
        name="size"
        value="S"
        v-model="animal.size"
        />
        <label for="small">S</label>
        <input
        class="radio"
        type="radio"
        name="size"
        value="M"
        v-model="animal.size"
        />
        <label for="medium">M</label>
        <input
        class="radio"
        type="radio"
        name="size"
        value="L"
        v-model="animal.size"
        />
        <label for="large">L</label>
    </div>
    <div id="fostered">
        <label class="radio-label"  for="fostered">Fostered?:</label><br> 
        <input
        class="radio"
        type="radio"
        name="fostered"
        value= true
        v-model="animal.fostered"
        />
        <label for="true">True</label>
        
        <input
        class="radio"
        type="radio"
        name="fostered"
        value= false
        v-model="animal.fostered"
        />
        <label for="fostered">False</label>
    </div>
</div>


</form>

</div>
</template>
<script>
export default{
        data(){
            return{
                animal: {
                    animalId: '',
                    animalName: '',
                    imageUrl: '',
                    gender: '',
                    type: '',
                    age: '',
                    size: '',
                    breed: '',
                    fostered: false,
                    description: '',
                    shelterId: ''
                }
            } 
        },
        methods:{
            handleSubmit(){
                if(!this.animal.type){
                    alert('Please select an animal type');
                } else if(!this.animal.animalName){
                    alert('Please fill out animal name');
                } else if(!this.animal.gender){
                    alert('Please select animal gender');
                } else if(!this.animal.shelterId){
                    alert('Please enter shelter ID');
                } else if(!this.animal.animalId){
                    alert('Please enter animal ID');
                }else {
                    this.$emit('update-animal', this.animal);

                    this.animal = {
                    animalId: '',
                    animalName: '',
                    imageUrl: '',
                    gender: '',
                    type: '',
                    age: '',
                    size: '',
                    breed: '',
                    fostered: false,
                    description: '',
                    shelterId: ''
                     
                
                    };

                }

                }
            },

        };
</script>
<style scoped>
#title{
    font-size: 24px;
    font-weight: 900;
    align-self: center;
    margin-top: 1;
    margin-bottom: 0px;
}
#updateAnimal{
    height: 675px;
    background-color: #C0C5CE;  
    width: 550px;
    margin-top: 1%;
    margin-left: 2%;
    margin-bottom: 7%;
    display: flex;
    flex-direction: column;
}
#updateAnimalForm{
    display: flex;
    margin-bottom: 2%;
    
}
#fields{
    display: flex;
    flex-direction: column;
    margin-left: 1%;
    margin-right: 2%;
    margin-top: 5%;
    margin-bottom: 5%;
}
label{
    margin-top: 2%;
    margin-bottom: 2%;
    margin-right: 5%;
    margin-left: 0%;
}
#animalIdLabel{
    margin-top: 2%;
    margin-bottom: 5%;
    margin-right: 5%;
    margin-left: 0%;
    
}
#animalId{
    width: 100px;
    margin-bottom: 20%;
}

#radio-buttons{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10%;
    margin-bottom: 20%;
   
}
.field{
    border: none;
    border-radius: 10px;
    height: 40px;
    width: 350px;
}
.textarea{
    border: none;
    border-radius: 10px;
    height: 100px;
    width: 350px;
}
.radio{
    margin-bottom: 20%;
    margin-top: 5%;
    margin-right: 2%;
    margin-left: 1%;

}
input[type="radio"] {
    accent-color: black;
}

#gender{
    display: flex;
}
button{
  height: 45px;
  width: 350px;
  border-radius: 10px;
  background-color: var(--accent_cr);
  color: white;
  border: none;
  margin-top: 4%;
  margin-bottom: 7%; 
  cursor: pointer;  
}
button:hover{
    background-color: black;
}
@media only screen and (max-width: 425px){
    #title{
        margin-right: 20%;
    }

    #updateAnimal{
    height: 100%;
    background-color: #C0C5CE;  
    width: 100vw;
    margin-top: 0%;
    margin-left: 0%;
    margin-bottom: 0%;
    display: flex;
    flex-direction: column;
    }
    .field{
    width: 200px;
    }
    #fields{
        margin-right: 0px;
        width: 220px;
        padding-right: 0px;
    }

.textarea{
    width: 200px;
    }
    #radio-buttons{
        margin: 0%;
        width: 120px; 
    }
 
    label{
        margin-right: 0%;
        margin-left: 1%;
        width: 100px;
    }


}
</style>