export interface ICardOptions {
  name: string,
  value: number,
}
export interface ICard  {
  id: number;
  img: string,
  title: string,
  desc: string,
  options: Array<ICardOptions>
}

export interface IBasketCard {
  card: ICard,
  count: number,
  id: number,
}
