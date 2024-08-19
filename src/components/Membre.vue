

<template>
    <div class="container">
      <h2>Ajouter un Nouveau Membre</h2>
      <form @submit.prevent="ajouterMembre">
        <div class="mb-3">
          <label for="nom" class="form-label">Nom:</label>
          <input type="text" v-model="membre.nom" id="nom" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input type="email" v-model="membre.email" id="email" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="adresse" class="form-label">Adresse:</label>
          <input type="text" v-model="membre.adresse" id="adresse" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="telephone" class="form-label">Téléphone:</label>
          <input type="tel" v-model="membre.telephone" id="telephone" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Ajouter Membre</button>
      </form>
  
      <h3 class="mt-5">Liste des Membres</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Email</th>
            <th scope="col">Adresse</th>
            <th scope="col">Téléphone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(membre, index) in membres" :key="index">
            <td>{{ membre.nom }}</td>
            <td>{{ membre.email }}</td>
            <td>{{ membre.adresse }}</td>
            <td>{{ membre.telephone }}</td>
            <td>
              <button @click="supprimerMembre(index)" class="btn btn-danger btn-sm">Supprimer</button>
              <button @click="modifierMembre(index)" class="btn btn-warning btn-sm">Modifier</button>
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
        membre: {
          nom: '',
          email: '',
          adresse: '',
          telephone: '',
          dateNaissance: '',
        },
        membres: [], // Liste des membres ajoutés
      };
    },
    methods: {
      ajouterMembre() {
        if (this.membre.nom && this.membre.email && this.membre.adresse) {
          // Ajouter le membre à la liste
          this.membres.push({ ...this.membre });
          // Réinitialiser le formulaire après l'ajout
          this.membre.nom = '';
          this.membre.email = '';
          this.membre.adresse = '';
          this.membre.telephone = '';
          this.membre.dateNaissance = '';
        }
      },
      supprimerMembre(index) {
        // Supprimer le membre de la liste
        this.membres.splice(index, 1);
      },
      modifierMembre(index) {
        // Logic to handle the modification of a member can be added here
        alert(`Modifier le membre à l'index ${index}`);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Optionnel: Styles supplémentaires */
  table {
    margin-top: 20px;
  }
  
  h3 {
    margin-top: 40px;
  }
  </style>
  