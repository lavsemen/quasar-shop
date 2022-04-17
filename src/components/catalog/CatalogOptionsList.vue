<template>
  <div class="catalog-options__list">
    <catalog-option-item
      v-for="option in options"
      :key="option.name"
      :option="option"
    />
  </div>
</template>

<script lang="ts" setup>
import { ICardOptions } from "src/types/CardTypes";
import CatalogOptionItem from "./CatalogOptionItem.vue";
interface Props {
  options: Array<ICardOptions>;
}
const { options } = defineProps<Props>();
</script>
