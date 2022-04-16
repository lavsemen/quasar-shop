<template>
  <div>
    <h1 class="mt-3">Товары</h1>

    <catalog-card-list/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CatalogCardList from "src/components/catalog/CatalogCardList.vue";

export default defineComponent({
  components: { CatalogCardList },
  name: "IndexPage",

  setup() {},
});
</script>
