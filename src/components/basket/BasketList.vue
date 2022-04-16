<template>
  <div lass="basket__list mt-3" v-if="basket.length">
    <div class="basket__item basket__item--notification">
      <div class="basket__item-index"></div>
      <div class="basket__item-name">Название</div>
      <div class="basket__item-desc">Описание</div>
      <div class="basket__item-count">Количество</div>
    </div>

    <basket-item
      @setCount="setCount"
      @removeItem="removeItem"
      v-for="(item, index) in basket"
      :item="item"
      :key="item.card.id"
      :idx="index"
    />
  </div>
  <div v-else class="mt-3">
    <h2>Добавьте что нибудь в корзину</h2>
  </div>
</template>

<script setup lang="ts">
import { useCatalogStore } from "src/stores/catalog-store";
import BasketItem from "./BasketItem.vue";

const catalogStore = useCatalogStore();
const { basket } = catalogStore;

const setCount = (count: number, id: number) => {
  catalogStore.setCountInBasket(count, id);
};
const removeItem = (id: number) => {
  catalogStore.removeItemInBasket(id);
}
</script>
