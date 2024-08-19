
<template>
    <div class="container">
      <h2>Gérer les Prêts de Livres</h2>
      <form @submit.prevent="ajouterPret">
        <div class="mb-3">
          <label for="nomMembre" class="form-label">Nom du Membre:</label>
          <input type="text" v-model="pret.nomMembre" id="nomMembre" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="titreLivre" class="form-label">Titre du Livre:</label>
          <input type="text" v-model="pret.titreLivre" id="titreLivre" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="dateDebut" class="form-label">Date de Début:</label>
          <input type="date" v-model="pret.dateDebut" id="dateDebut" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="dateFin" class="form-label">Date de Fin:</label>
          <input type="date" v-model="pret.dateFin" id="dateFin" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary">Ajouter Prêt</button>
      </form>
  
      <h3 class="mt-5">Liste des Prêts</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nom du Membre</th>
            <th scope="col">Titre du Livre</th>
            <th scope="col">Date de Début</th>
            <th scope="col">Date de Fin</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(pret, index) in prets" :key="index">
            <td>{{ pret.nomMembre }}</td>
            <td>{{ pret.titreLivre }}</td>
            <td>{{ pret.dateDebut }}</td>
            <td>{{ pret.dateFin }}</td>
            <td>
              <button @click="supprimerPret(index)" class="btn btn-danger btn-sm">Supprimer</button>
              <button @click="editerPret(index)" class="btn btn-warning btn-sm">Modifier</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  

  <script>
import { ref } from 'vue';

export default {
  setup() {
    // Références réactives pour le prêt et la liste des prêts
    const pret = ref({
      nomMembre: '',
      titreLivre: '',
      dateDebut: '',
      dateFin: ''
    });

    const prets = ref([]); // Liste des prêts ajoutés
    const pretIndex = ref(null); // Index du prêt à modifier

    // Fonction pour ajouter ou modifier un prêt
    const ajouterPret = () => {
      if (pret.value.nomMembre && pret.value.titreLivre && pret.value.dateDebut && pret.value.dateFin) {
        if (pretIndex.value === null) {
          // Ajouter le prêt à la liste
          prets.value.push({ ...pret.value });
        } else {
          // Modifier un prêt existant
          prets.value[pretIndex.value] = { ...pret.value };
          pretIndex.value = null; // Réinitialiser l'index après modification
        }
        // Réinitialiser le formulaire après l'ajout ou la modification
        pret.value = {
          nomMembre: '',
          titreLivre: '',
          dateDebut: '',
          dateFin: ''
        };
      }
    };

    // Fonction pour supprimer un prêt
    const supprimerPret = (index) => {
      // Supprimer le prêt de la liste
      prets.value.splice(index, 1);
    };

    // Fonction pour éditer un prêt
    const editerPret = (index) => {
      // Charger les informations du prêt à modifier
      pret.value = { ...prets.value[index] };
      pretIndex.value = index;
    };

    // Retourner les références et les fonctions pour être utilisées dans le template
    return {
      pret,
      prets,
      pretIndex,
      ajouterPret,
      supprimerPret,
      editerPret
    };
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
  