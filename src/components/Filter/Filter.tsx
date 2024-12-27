import React from "react";

import styles from "./styles.module.css";

type FilterType = {
  options: string[];
  selectedGenre: string;
  handleOnChange: (value: string) => void;
};

export const Filter = ({ options, selectedGenre, handleOnChange }: FilterType) => {
  return (
    <>
      <label htmlFor="genre"> Genre | </label>
      <select
        name="genre"
        id="genre"
        value={selectedGenre}
        onChange={(e) => handleOnChange(e.target.value)}
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
