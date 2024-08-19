<!-- <template>
  <h1>Appliaction de gestion </h1>
  
</template>

<script setup>

</script>

<style scoped>

</style> -->

<template>
    <div class="container">
      <h2>Ajouter un Nouveau Livre</h2>
      <form @submit.prevent="ajouterLivre" >
        <div class="mb-3 ">
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
  
      <h3 class="mt-5">Liste des Livres</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Titre</th>
            <th scope="col">Auteur</th>
            <th scope="col">Année</th>
            <th scope="col">Genre</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(livre, index) in livres" :key="index">
            <td>{{ livre.titre }}</td>
            <td>{{ livre.auteur }}</td>
            <td>{{ livre.annee }}</td>
            <td>{{ livre.genre }}</td>
            <td>
              <button @click="supprimerLivre(index)" class="btn btn-danger btn-sm">Supprimer</button>
              <button @click="modifierLivre(index)" class="btn btn-danger btn-sm">Modifier</button>
              <button @click="detailLivre(index)" class="btn btn-danger btn-sm">Detail</button>
            </td>
          </tr>
        </tbody>
      </table>
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
        livres: [], // Liste des livres ajoutés
      };
    },
    methods: {
      ajouterLivre() {
        if (this.livre.titre && this.livre.auteur && this.livre.annee && this.livre.genre) {
          // Ajouter le livre à la liste
          this.livres.push({ ...this.livre });
          // Réinitialiser le formulaire après l'ajout
          this.livre.titre = '';
          this.livre.auteur = '';
          this.livre.annee = '';
          this.livre.genre = '';
        }
      },
      supprimerLivre(index) {
        // Supprimer le livre de la liste
        this.livres.splice(index, 1);
      }
    }
  };
  </script>
  
  <style>
  /* Optionnel: Styles supplémentaires */
  table {
    margin-top: 20px;
  }
  
  h3 {
    margin-top: 40px;
  }
  </style>
  
