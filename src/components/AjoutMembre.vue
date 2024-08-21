<template>
  <button type="submit" class="btn btn-primary m-4" @click="ajout = true">Ajouter Membre</button>
  <div class="container" v-if="ajout">
    <h2 v-if="!isEditing">Ajouter un Nouveau Membre</h2>
    <h2 v-else>Modifier Membre</h2>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="nom" class="form-label">Nom:</label>
        <input type="text" v-model="nom" id="nom" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input type="email" v-model="email" id="email" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="adresse" class="form-label">Adresse:</label>
        <input type="text" v-model="adresse" id="adresse" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="telephone" class="form-label">Téléphone:</label>
        <input type="tel" v-model="telephone" id="telephone" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">{{ isEditing ? 'Modifier' : 'Ajouter' }} Membre</button>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['onAdd', 'onEdit']);
const nom = ref('');
const email = ref('');
const adresse = ref('');
const telephone = ref('');
const ajout = ref(false);
const isEditing = ref(false);
const membreId = ref(null);

const onSubmit = () => {
  if (isEditing.value) {
    emit('onEdit', { id: membreId.value, nom: nom.value, email: email.value, adresse: adresse.value, telephone: telephone.value });
  } else {
    emit('onAdd', nom.value, email.value, adresse.value, telephone.value);
  }
  resetForm();
};

const resetForm = () => {
  nom.value = '';
  email.value = '';
  adresse.value = '';
  telephone.value = '';
  isEditing.value = false;
  ajout.value = false;
};

const editMembre = (membre) => {
  nom.value = membre.nom;
  email.value = membre.email;
  adresse.value = membre.adresse;
  telephone.value = membre.telephone;
  membreId.value = membre.id;
  isEditing.value = true;
  ajout.value = true;
};

defineExpose({ editMembre });
</script>
