import React from "react";
import { useStore } from "@/store/useStore";
import { useShallow } from "zustand/shallow";

import styles from "./styles.module.css";

type FilterType = {
  options: any;
};

export const Filter = ({ options }: FilterType) => {
  const { genre, setGenre } = useStore(
    useShallow((state) => ({
      genre: state.genre,
      setGenre: state.setGenre,
    }))
  );

  return (
    <>
      <label htmlFor="genre"> Genre | </label>
      <select
        name="genre"
        id="genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        <option value="all">All</option>
        {options?.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};
