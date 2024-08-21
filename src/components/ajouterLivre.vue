<template>
  <button type="button" class="btn m-4 btn-primary " @click="openForm">Ajouter un Nouveau livre</button>
  <div class="container" v-if="formu">
    <h2>{{ isEditing ? 'Modifier le Livre' : 'Ajouter un Nouveau Livre' }}</h2>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="titre" class="form-label">Titre:</label>
        <input type="text" v-model="titre" id="titre" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="auteur" class="form-label">Auteur:</label>
        <input type="text" v-model="auteur" id="auteur" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="annee" class="form-label">Année:</label>
        <input type="date" v-model="annee" id="annee" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="genre" class="form-label">Genre:</label>
        <input type="text" v-model="genre" id="genre" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">{{ isEditing ? 'Mettre à jour' : 'Ajouter' }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["onAdd", "onEdit"]); 

const titre = ref("");
const auteur = ref("");
const annee = ref("");
const genre = ref("");
const formu = ref(false);
const isEditing = ref(false);
let editIndex = ref(null);

const onSubmit = () => {
  if (isEditing.value && editIndex.value !== null) {
    emit("onEdit", editIndex.value, titre.value, auteur.value, annee.value, genre.value);
  } else {
    emit("onAdd", titre.value, auteur.value, annee.value, genre.value);
  }
  resetForm();
};

const edit = (livre, index) => {
  titre.value = livre.titre;
  auteur.value = livre.auteur;
  annee.value = livre.annee;
  genre.value = livre.genre;
  formu.value = true;
  isEditing.value = true;
  editIndex.value = index;
};

const openForm = () => {
  resetForm();
  formu.value = true;
};

const resetForm = () => {
  titre.value = ""; 
  auteur.value = ""; 
  annee.value = "";
  genre.value = "";
  isEditing.value = false;
  editIndex.value = null;
};

defineExpose({ edit });
</script>

<style scoped>

h3 {
  color:  red;
}
</style>