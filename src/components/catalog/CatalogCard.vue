<template>
  <div class="card" style="width: 18rem">
    <img :src="img" class="card-img-top" alt="Товар" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ desc }}
      </p>
      <div class="card__actions d-flex justify-content-between">
        <button class="btn btn-primary">Опиции</button>
        <button @click="addToBasket(id)" class="btn btn-success">В корзину</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCatalogStore } from "src/stores/catalog-store";
import { ICard } from "src/types/CardTypes";

type Props = {
  card: ICard
};

const catalogStore = useCatalogStore();
const props = defineProps<Props>();
const {img, title, desc, id } = props.card;


const addToBasket = (id: number) => {
  catalogStore.addToBasket(id);
}


</script>


<style scoped>
  .card {
    width: 100% !important;
  }
</style>
