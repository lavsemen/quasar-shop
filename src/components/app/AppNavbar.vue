<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Good Shop</a>
      <ul class="nav">
        <router-link
          v-for="link in linksList"
          :key="link.url"
          custom
          :to="link.url"
          v-slot="{ navigate, href, isExactActive }"
        >
          <li class="nav-item" :class="{ active: isExactActive }">
            <a class="nav-link" :href="href" @click="navigate">
              {{ link.name }}
              <span
                v-if="link.basket && catalogStore.countItem"
                class="nav-link__label"
              >
                {{ catalogStore.countItem }}
              </span>
            </a>
          </li>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { count } from "console";
import { useCatalogStore } from "src/stores/catalog-store";
import { defineComponent } from "vue-demi";

export default defineComponent({
  setup() {
    const catalogStore = useCatalogStore();
    const linksList = [
      {
        url: "/",
        name: "Магазин",
      },
      {
        url: "/about",
        name: "О нас",
      },
      {
        url: "/basket",
        name: "Корзина",
        basket: true,
      },
    ];

    return {
      linksList,
      catalogStore,
    };
  },
});
</script>
