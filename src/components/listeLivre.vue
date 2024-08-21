<template>
  <h3 class="mt-2 ml-3">Liste des Livres</h3>
  <table class="table table-striped container">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Titre</th>
        <th scope="col">Auteur</th>
        <th scope="col">Année</th>
        <th scope="col">Genre</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(livre, index) in livres" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ livre.titre }}</td>
        <td>{{ livre.auteur }}</td>
        <td>{{ livre.annee }}</td>
        <td>{{ livre.genre }}</td>
        <td>
          <button @click="destroy(index)" class="btn btn-danger btn-sm">Supprimer</button>
          <button @click="edit(index)" class="btn btn-warning btn-sm">Modifier</button>
          
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps({
  livres: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["onRemove", "onEdit"]);

const destroy = (index) => {
  emit("onRemove", index);
};

const edit = (index) => {
  emit("onEdit", index);
};
</script>
