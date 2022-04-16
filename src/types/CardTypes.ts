export interface ICard  {
  id: number;
  img: string,
  title: string,
  desc: string
}

export interface IBasketCard {
  card: ICard,
  count: number,
  id: number,
}
