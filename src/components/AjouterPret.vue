<template>
  <div>
    <button type="button" class="btn m-4 btn-primary" @click="formu = true">
      {{ 'Ajouter un Nouveau Prêt' }}
    </button>
    <div class="container" v-if="formu">
      <h2>{{ isEditing ? 'Modifier le Prêt' : 'Ajouter un Nouveau Prêt' }}</h2>
      <form @submit.prevent="onSubmit">
        <div class="mb-3">
          <label for="nomMembre" class="form-label">Nom du Membre:</label>
          <select class="form-select" v-model="nomMembre" aria-label="Default select example">
            <option value="Achetou Gaye">Achetou Gaye</option>
            <option value="Harouna Traore">Harouna Traore</option>
            <option value="Fatima Cissé">Fatima Cissé</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="titrelivre" class="form-label">Titre du Livre:</label>
          <select class="form-select" v-model="titreLivre" aria-label="Default select example">
            <option value="Mathématique">Mathématique</option>
            <option value="Science">Science</option>
            <option value="Chime">Chimie</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="dateDebut" class="form-label">Date de Début:</label>
          <input type="date" v-model="dateDebut" id="dateDebut" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="dateFin" class="form-label">Date de Fin:</label>
          <input type="date" v-model="dateFin" id="dateFin" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">{{ isEditing ? 'Modifier' : 'Ajouter' }}</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["onAdd", "onEdit"]);

const nomMembre = ref("");
const titreLivre = ref("");
const dateDebut = ref("");
const dateFin = ref("");
const formu = ref(false);
const isEditing = ref(false);
const pretId = ref(null);

const onSubmit = () => {
  if (isEditing.value) {
    emit("onEdit", { id: pretId.value, nomMembre: nomMembre.value, titreLivre: titreLivre.value, dateDebut: dateDebut.value, dateFin: dateFin.value });
  } else {
    emit("onAdd", { nomMembre: nomMembre.value, titreLivre: titreLivre.value, dateDebut: dateDebut.value, dateFin: dateFin.value });
  }
  resetForm();
};

const resetForm = () => {
  nomMembre.value = "";
  titreLivre.value = "";
  dateDebut.value = "";
  dateFin.value = "";
  isEditing.value = false;
  formu.value = false;
};

const editPret = (pret) => {
  nomMembre.value = pret.nomMembre;
  titreLivre.value = pret.titreLivre;
  dateDebut.value = pret.dateDebut;
  dateFin.value = pret.dateFin;
  pretId.value = pret.id;
  isEditing.value = true;
  formu.value = true;
};

defineExpose({ editPret });
</script>
