import React from "react";

import styles from "./styles.module.css";

type ButtonType = {
  label: string;
  handleClick: () => void;
  widthFull?: boolean;
};

export const Button = ({
  label,
  handleClick,
  widthFull = false,
}: ButtonType) => {
  return (
    <button
      className={widthFull ? styles.button_full : styles.button}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
