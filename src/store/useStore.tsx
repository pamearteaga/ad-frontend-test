import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Store {
  cart: [];
  setCart: (cart: []) => void;
  genre: string;
  setGenre: (genre: string) => void;
}

export const useStore = create(
  persist<Store>(
    (set) => ({
      cart: [],
      setCart: (cart: []) => set({ cart }),
      genre: "all",
      setGenre: (genre: string) => set({ genre }),
    }),
    {
      name: "gamershop",
      storage: createJSONStorage(() => localStorage),
    }
  )
);