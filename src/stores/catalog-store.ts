import { defineStore } from 'pinia';
import { IBasketCard, ICard } from 'src/types/CardTypes';

export const useCatalogStore = defineStore('catalog', {
  state: () => ({
    items: [
      {
        title: 'Маргаррита',
        desc: 'Описание товара',
        id: 1,
        img: 'https://kartinkin.net/uploads/posts/2021-03/1617154014_12-p-pitstsa-domashnyaya-krasivo-12.jpg',
        options: [
          {
            name: 'Сыр',
            value: 0
          },
          {
            name: 'Вечина',
            value: 0
          }
        ]
      },

    ] as Array<ICard>,

    basket: [] as Array<IBasketCard>
  }),
  getters: {
    countItem(): number {
      const count: number = this.basket.reduce((acc, item) => {
        return acc + item.count
      }, 0)

      return count;
    }
  },
  actions: {
    addToBasket(id: number) {
      const item: ICard | undefined = this.items.find(card => card.id === id);
      const basketItem: IBasketCard | undefined = this.basket.find(item => item.card.id === id);

      if (!item) {
        return;
      }

      if (!basketItem) {
        this.basket.push({
          card: item,
          count: 1,
          id: item.id
        });
      } else {
        basketItem.count++
      }
      localStorage.setItem('basket', JSON.stringify(this.basket));

    },
    setCountInBasket(count: number, id: number) {
      const basketItem: IBasketCard | undefined = this.basket.find(item => item.card.id === id);

      if (basketItem) {
        basketItem.count = count;
      }
      localStorage.setItem('basket', JSON.stringify(this.basket));
    },

    getStoregeBasket() {
      const basket = localStorage.getItem('basket');

      if (basket) {
        this.basket = JSON.parse(basket);
      }
    },
    removeItemInBasket(id: number) {
      const idx = this.basket.findIndex(item => item.id === id);

      this.basket.splice(idx, 1);

      localStorage.setItem('basket', JSON.stringify(this.basket));
    }
  },
});
