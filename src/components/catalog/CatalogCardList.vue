<template>
  <div class="cards-list mt-4">
    <div class="row gy-4">
      <div v-for="item in items" :key="item.id" class="col-lg-4">
        <catalog-card :card="item"/>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import CatalogCard from "./CatalogCard.vue";
import { ICard } from "src/types/CardTypes";

import {useCatalogStore} from 'src/stores/catalog-store';

const catalogStore = useCatalogStore()
const items:Array<ICard> = catalogStore.items;


</script>
