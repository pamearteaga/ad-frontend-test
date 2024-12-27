import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Game } from "@/utils/endpoint";

interface Store {
  cart: Game[];
  setCart: (cart: Game[]) => void;
}

export const useStore = create(
  persist<Store>(
    (set) => ({
      cart: [],
      setCart: (cart: Game[]) => set({ cart }),
    }),
    {
      name: "GamerShop",
      storage: createJSONStorage(() => localStorage),
    }
  )
);