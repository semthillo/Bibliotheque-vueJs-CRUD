<template>
    <div>
      <h3>Liste des Membres</h3>
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
  
  <script setup>
  const props = defineProps({
    membres: {
      type: Array,
      required: true,
    },
  });
  
  const emit = defineEmits(['onRemove', 'onEdit']);
  
  const supprimerMembre = (index) => {
    emit('onRemove', index);
  };
  
  const modifierMembre = (index) => {
    emit('onEdit', index);
  };
  </script>
  
  <style scoped>
 
  </style>
  