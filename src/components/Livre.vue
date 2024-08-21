<script setup>

import Accueil from "./Accueil.vue";
import ajouterLivre from "./ajouterLivre.vue";

Accueil
import { ref } from "vue";

const livres = ref([
  { titre: "Livre 1", auteur: "Auteur 1", annee: "2022", genre: "Fiction" },
  { titre: "Livre 2", auteur: "Auteur 2", annee: "2023", genre: "Science" }
]);

const formComponent = ref();

const add = (titre, auteur, annee, genre) => {
  livres.value.push({
    titre,
    auteur,
    annee,
    genre,
  });
};

const remove = (index) => {
  livres.value.splice(index, 1);
};

const edit = (index, titre, auteur, annee, genre) => {
  livres.value[index] = { titre, auteur, annee, genre };
};

const initiateEdit = (index) => {
  const livre = livres.value[index];
  formComponent.value.edit(livre, index);
};

</script>

<template>
  <Accueil />
  <router-view />
  <ajouterLivre ref="formComponent" @onAdd="add" @onEdit="edit" />
  <ListeLivre :livres="livres" @onRemove="remove" @onEdit="initiateEdit" />
</template>
