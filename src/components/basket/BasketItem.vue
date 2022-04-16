<template>
  <div class="basket__item">
    <div class="basket__item-index">{{props.idx + 1}}</div>
    <div class="basket__item-name">{{title}}</div>
    <div class="basket__item-desc">{{desc}}</div>
    <div class="basket__item-count">
      <input type="number" :value="props.item.count" @change="setCountItems" id="count" />
    </div>

    <div class="basket__item-remove btn btn-danger" @click="removeItem(props.item.id)">Удалить</div>
  </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue';
import {IBasketCard} from 'src/types/CardTypes'
  interface Props  {
    item: IBasketCard,
    idx: number,
  }
  const props  = defineProps<Props>();
  const emit = defineEmits(['setCount', 'removeItem']);

  const {title, desc} = props.item.card;

  const setCountItems = (event: Event) => {
    const target: HTMLInputElement | null = event.target;

    if (target === null) {
      return;
    }
    emit('setCount', +target.value, props.item.id)

  }

  const removeItem = (id: number) => {
    emit('removeItem', id)
  }

  watch(() => props.item.count, val => {
    if (val <= 0) {
      removeItem(props.item.id)
    }
   })
</script>
