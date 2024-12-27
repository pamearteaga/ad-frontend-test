import { Game } from "./endpoint"

export const removeItemFromCart = (id: string, cart: Game[]) => {
  return cart.filter((item) => item.id !== id);
};