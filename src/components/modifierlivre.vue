<!-- <template>
    <div class="container">
      <h2>Modifier un Livre</h2>
      <form @submit.prevent="modifierLivre">
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
        <button type="submit" class="btn btn-primary">Modifier Livre</button>
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
              <button @click="editerLivre(index)" class="btn btn-warning btn-sm">Modifier</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      // Recevez l'indice du livre à modifier en tant que prop
      livreIndex: {
        type: Number,
        required: true,
      },
    },
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
    created() {
      // Charger le livre à modifier lorsque le composant est créé
      this.chargerLivre();
    },
    methods: {
      chargerLivre() {
        // Exemple: récupérer le livre de la liste basé sur l'indice passé en prop
        if (this.livreIndex >= 0 && this.livreIndex < this.livres.length) {
          this.livre = { ...this.livres[this.livreIndex] };
        }
      },
      modifierLivre() {
        // Mettre à jour le livre dans la liste
        if (this.livre.titre && this.livre.auteur && this.livre.annee && this.livre.genre) {
          this.$set(this.livres, this.livreIndex, { ...this.livre });
          // Réinitialiser le formulaire après la modification
          this.livre = {
            titre: '',
            auteur: '',
            annee: '',
            genre: '',
          };
        }
      },
      supprimerLivre(index) {
        // Supprimer le livre de la liste
        this.livres.splice(index, 1);
      },
      editerLivre(index) {
        // Fonction pour permettre l'édition d'un livre
        this.livreIndex = index;
        this.chargerLivre();
      },
    },
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
  </style> -->

  <template>
    <div class="container">
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
              <button @click="modifierPret(index)" class="btn btn-warning btn-sm">Modifier</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div v-if="pretEnCours !== null" class="mt-5">
        <h3>Modifier le Prêt</h3>
        <form @submit.prevent="sauvegarderModification">
          <div class="mb-3">
            <label for="nomMembre" class="form-label">Nom du Membre:</label>
            <input type="text" v-model="pretEnCours.nomMembre" id="nomMembre" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="titreLivre" class="form-label">Titre du Livre:</label>
            <input type="text" v-model="pretEnCours.titreLivre" id="titreLivre" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="dateDebut" class="form-label">Date de Début:</label>
            <input type="date" v-model="pretEnCours.dateDebut" id="dateDebut" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="dateFin" class="form-label">Date de Fin:</label>
            <input type="date" v-model="pretEnCours.dateFin" id="dateFin" class="form-control" />
          </div>
          <button type="submit" class="btn btn-primary">Sauvegarder</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        prets: [
          // Exemple de prêts
          { nomMembre: 'Adama Ba', titreLivre: 'Le Petit Prince', dateDebut: '2024-08-01', dateFin: '2024-07-15' },
          { nomMembre: 'Amadou Sy', titreLivre: 'I.T', dateDebut: '2024-07-20', dateFin: '2024-10-15' },
        ],
        pretEnCours: null,  // Stocke les détails du prêt en cours de modification
        indexEnCours: null  // Stocke l'index du prêt en cours de modification
      };
    },
    methods: {
      editerPret(index) {
        // Charge les détails du prêt sélectionné dans pretEnCours pour l'édition
        this.pretEnCours = { ...this.prets[index] };
        this.indexEnCours = index;
      },
      sauvegarderModification() {
        // Met à jour le prêt avec les nouvelles valeurs
        if (this.indexEnCours !== null) {
          this.$set(this.prets, this.indexEnCours, { ...this.pretEnCours });
          this.pretEnCours = null;
          this.indexEnCours = null;
        }
      },
      supprimerPret(index) {
        this.prets.splice(index, 1);
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
  
  