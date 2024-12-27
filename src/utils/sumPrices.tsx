import { Game } from "./endpoint"

export const sumPrices = (items: Game[]) => {
  const total = items.reduce((total, item) => total + (item.price || 0), 0);
  
  return Math.round(total * 100) / 100;
}