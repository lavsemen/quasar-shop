<template>
  <div class="card" style="width: 18rem">
    <img :src="img" class="card-img-top" alt="Товар" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ desc }}
      </p>
      <div class="card__actions d-flex justify-content-between">
        <button @click="showModal = true" class="btn btn-primary">Опиции</button>
        <button @click="addToBasket(id)" class="btn btn-success">В корзину</button>
      </div>
    </div>
  </div>
  <app-modal @closeModal="closeModal" title="Опции" :showModal="showModal">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reprehenderit fugiat laboriosam! Praesentium accusantium mollitia tempora doloribus quasi nobis quibusdam? Unde iure, aperiam magni odio architecto non natus tempora voluptas?
  </app-modal>
</template>

<script setup lang="ts">
import { useCatalogStore } from "src/stores/catalog-store";
import { ICard } from "src/types/CardTypes";
import AppModal from 'components/app/AppModal.vue'
import { ref } from "vue";

type Props = {
  card: ICard
};

const catalogStore = useCatalogStore();
const props = defineProps<Props>();
const {img, title, desc, id, options } = props.card;

const showModal = ref(false)


const addToBasket = (id: number) => {
  catalogStore.addToBasket(id);
}

const closeModal = () => {
  showModal.value = false;
}


</script>


<style scoped>
  .card {
    width: 100% !important;
  }
</style>
