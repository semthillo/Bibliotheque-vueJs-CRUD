<script setup>

import Accueil from "./Accueil.vue";
import AjouterPret from "./AjouterPret.vue";
import ListePret from "./ListePret.vue";
import { ref } from "vue";

const prets = ref([]);

const formComponent = ref();

const addPret = (pret) => {
  prets.value.push({ ...pret, id: prets.value.length + 1 });
};

const removePret = (index) => {
  prets.value.splice(index, 1);
};

const editPret = (index) => {
  const pret = prets.value[index];
  formComponent.value.editPret(pret);
};

const updatePret = (updatedPret) => {
  const index = prets.value.findIndex((p) => p.id === updatedPret.id);
  if (index !== -1) {
    prets.value[index] = updatedPret;
  }
};
</script>

<template>
  <Accueil />
  <div>
    <AjouterPret @on-add="addPret" @on-edit="updatePret" ref="formComponent" />
    <ListePret :prets="prets" @on-remove="removePret" @on-edit="editPret" />
  </div>
</template>
