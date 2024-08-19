
<template>
    <div>
      <h2>Ajouter un Nouveau Livre</h2>
      <form @submit.prevent="ajouterLivre">
        <div class="mb-3">
          <label for="titre" class="form-label">Titre:</label>
          <input type="text" v-model="livre.titre" id="titre" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="auteur" class="form-label">Auteur:</label>
          <input type="text" v-model="livre.auteur" id="auteur" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="annee" class="form-label">Année:</label>
          <input type="date" v-model="livre.annee" id="annee" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="genre" class="form-label">Genre:</label>
          <input type="text" v-model="livre.genre" id="genre" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary">Ajouter Livre</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        livre: {
          titre: '',
          auteur: '',
          annee: '',
          genre: '',
        },
      };
    },
    methods: {
      ajouterLivre() {
        this.$emit('ajouter', { ...this.livre });
        this.livre.titre = '';
        this.livre.auteur = '';
        this.livre.annee = '';
        this.livre.genre = '';
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques au composant AjoutLivre */
  </style>
  
