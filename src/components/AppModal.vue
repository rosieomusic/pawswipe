<template>
      <div v-if="isVisible" class="modal-overlay" @click.self="close">
    <div class="modal-content">
        <div id="x">
      <button class="close-button" v-on:click="close">&times;</button>
        </div>
      <router-link class="link" v-bind:to="{ name: 'home' }">Home</router-link>
        <div id="admin-link" v-if="$store.getters.isAdmin">
        <router-link class="link" v-bind:to="{ name: 'admin' }">Admin</router-link>
      </div>
        <router-link class="link" v-bind:to="{ name: 'home' }">Shelters</router-link>
        <div id="fav-link" v-if="$store.getters.isAuthenticated && !$store.getters.isAdmin">
        <router-link class="link" v-bind:to="{ name: 'favorites' }">Favorites</router-link>
      </div>
        <router-link class="link" v-bind:to="{ name: 'home' }">Resources</router-link>
        <router-link class="link" v-bind:to="{ name: 'home' }">Fostering</router-link>
        <router-link class="link" v-bind:to="{ name: 'home' }">Contact</router-link>
      
    
  
      <div id="buttons" v-if="!isLoggedIn">
        <router-link v-bind:to="{ name: 'login' }">Sign In</router-link>
        <router-link v-bind:to="{ name: 'register' }">Register</router-link>
      </div>
      <div id="logout-button" v-else>
        <router-link v-bind:to="{ name: 'logout' }">Logout</router-link>
      </div>
    </div>
</div>
 
</template>


<script>
export default{
    props: {
        isVisible: {
            type: Boolean,
            required: true
        }
    },
    computed: {
    isLoggedIn() {
      return this.$store.state.token.length > 0;
    }
  },
    
    methods: {
        toggleModal(){
          this.isModalVisible =!this.isModalVisible;
        },
        close(){
            this.$emit('close');
        }
    },
};
</script>

<style scoped>
.modal-overlay{
    position: fixed;
    top: 0;
    bottom: 0;
    width: 160px;
    height: 170px;
    background-color: #D9D9D9;
    opacity: 95%;
    display: flex;
    align-items: center;
    

}
.modal-content{
    color: black;
    display: flex;
    flex-direction: column;
    margin-right: 0px;
    margin-left: 7px;
    padding: 1px;

}
.close-button{
    position: absolute;
    border: none;
    background-color: #D9D9D9;
    margin-left: 120px;
    font-size: 32px;
}
a{
    color: black;
    text-decoration: none;  
}
a:hover{
    background-color: #69788F;
    color: white;
    border-radius: 6px;
    margin-right: 5px;
}
#buttons{
    display: flex;
    flex-direction: column;
}
#x{
    margin-bottom: 25px;

}
</style>