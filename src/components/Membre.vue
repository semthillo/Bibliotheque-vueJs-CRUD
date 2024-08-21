<script setup>
import Accueil from './Accueil.vue';
import AjouterMembre from './AjoutMembre.vue';
import ListeMembre from './ListeMembre.vue';
import { ref } from 'vue';

const membres = ref([]);

const formComponent = ref();

const ajouterMembre = (nom, email, adresse, telephone) => {
  membres.value.push({ id: membres.value.length + 1, nom, email, adresse, telephone });
};

const supprimerMembre = (index) => {
  membres.value.splice(index, 1);
};

const modifierMembre = (index) => {
  const membre = membres.value[index];
  formComponent.value.editMembre(membre);
};

const updateMembre = (updatedMembre) => {
  const index = membres.value.findIndex((m) => m.id === updatedMembre.id);
  if (index !== -1) {
    membres.value[index] = updatedMembre;
  }
};
</script>

<template>
  <Accueil />
  <div class="container">
    <AjouterMembre @onAdd="ajouterMembre" @onEdit="updateMembre" ref="formComponent" />
    <ListeMembre :membres="membres" @onRemove="supprimerMembre" @onEdit="modifierMembre" />
  </div>
</template>
