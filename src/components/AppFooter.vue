<template>
  <footer id="app-footer">
    <div id="icons">
      <a href="http://www.instagram.com/pugdashians">
        <i id="insta" class="fa-brands fa-square-instagram fa-4x"></i>
      </a>
      <a href="https://www.facebook.com/PhilaAnimalWelfareSociety/">
        <i id="fb" class="fa-brands fa-facebook-f fa-4x"></i>
      </a>
      <a href="https://www.youtube.com/watch?v=CdX4VYd5VXk">
        <i id="yt" class="fa-brands fa-youtube fa-4x"></i>
      </a>
      <router-link v-bind:to="{ name: 'home' }">
        <i id="paw" class="fa-solid fa-paw fa-4x"></i>
      </router-link>
    </div>
    <h1 id="copy">&copyCopyright Rose O'Malley 2024</h1>
  </footer>
</template>
  
  <script>
    export default {
  
    }
  </script>
  
  <style scoped>
  
  #app-footer {
    background-color: var(--footer_bg);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    width: 100%;
  }
#icons{
  margin-left: 2%;
}
#copy{
  margin-right: 2%;
  font-size: 16px;
}
#insta,#fb,#yt{
  margin-right: 13px;
}

a{
  text-decoration: none;
  color: black;
}
a:hover{
  color:var(--header_bg);
}

@media only screen and (max-width: 425px) {

  #app-footer{
    display: flex;
    flex-direction: column-reverse;
    height: 95px;
    margin-right: 10%;
  }
  i{
    font-size: 55px;
  }
  #insta,#fb,#yt{
  margin-right: 50px;
}
#copy{
  margin-right: 2%;
  padding-top: 4%;
  margin-top: 2%;
  margin-bottom: 3%;
  font-size: 16px;
}
}
</style> 