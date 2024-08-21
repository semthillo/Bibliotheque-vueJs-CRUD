<script setup>


</script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MaBiblio</a>
    
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link" to="/" >Accueil</router-link> 
      <router-link class="nav-link" to="/livre">Livres</router-link> 
      <router-link class="nav-link" to="/membre">Membre</router-link> 
      <router-link class="nav-link" to="/pret">Prêt</router-link>
        
      </div>
    </div>
  </div>
</nav>
  
  <router-view></router-view>
</template>

<style scoped>

</style>
