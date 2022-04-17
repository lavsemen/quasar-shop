<template>
   <div class="catalog-options__item">
      <span>{{option.name}}</span>
      <input type="number" v-model="option.value">
    </div>
</template>


<script lang="ts" setup>
import { watch } from "vue";
import { ICardOptions } from "src/types/CardTypes";

interface Props {
  option: ICardOptions
}
const {option} = defineProps<Props>();

watch(option, (option) => {
  if (option.value < 0) {
    option.value = 0
  }
})
</script>
