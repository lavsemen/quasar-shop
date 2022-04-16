<template>
  <q-layout view="lHh Lpr lFf">
    <app-navbar></app-navbar>
    <ui-container >
        <router-view />
    </ui-container>
  </q-layout>
</template>

<script lang="ts">
import AppNavbar from 'src/components/app/AppNavbar.vue';
import UiContainer from 'src/components/ui/bootstrap/UiContainer.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { UiContainer, AppNavbar },
  name: 'MainLayout',
});
</script>
