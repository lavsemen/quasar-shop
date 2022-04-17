<template>
   <q-dialog v-model="props.showModal">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{title}}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <slot></slot>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn  @click="closeModal" flat label="OK" color="primary" />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>


<script lang="ts" setup>
import { ICardOptions } from "src/types/CardTypes"
import { ref } from "vue-demi"

  interface Props {
    showModal: boolean,
    title: string
  }
  const emit = defineEmits(['closeModal']);
  const props = defineProps<Props>()
  const closeModal = () => {
    emit('closeModal')
  }
</script>


<style scoped>
  .q-card {
    overflow: visible;
  }
</style>
