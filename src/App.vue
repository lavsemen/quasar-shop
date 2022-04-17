<template>
  <router-view />
</template>

<script lang="ts" setup>
import { onMounted } from "vue-demi";
import { useCatalogStore } from "./stores/catalog-store";
const catalogStore = useCatalogStore();

onMounted(() => {
  catalogStore.getStoregeBasket()
})
</script>
