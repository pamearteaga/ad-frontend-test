import { Game } from "./endpoint"

export const sumPrices = (items: Game[]) => {
  return items.reduce((total, item) => total + (item.price || 0), 0);
}