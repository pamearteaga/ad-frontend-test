import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Game } from "@/utils/endpoint";

interface Store {
  cart: Game[];
  setCart: (cart: Game[]) => void;
  genre: string;
  setGenre: (genre: string) => void;
}

export const useStore = create(
  persist<Store>(
    (set) => ({
      cart: [],
      setCart: (cart: Game[]) => set({ cart }),
      genre: "all",
      setGenre: (genre: string) => set({ genre }),
    }),
    {
      name: "GamerShop",
      storage: createJSONStorage(() => localStorage),
    }
  )
);