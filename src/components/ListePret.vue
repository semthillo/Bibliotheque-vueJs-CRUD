<template>

    <div>
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

