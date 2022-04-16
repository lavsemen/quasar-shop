<template>
  <div class="container" :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi"

export default defineComponent({
  props: {
    classes: String
  }
})
</script>
