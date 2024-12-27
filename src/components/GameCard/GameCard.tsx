import React from "react";
import { Game } from "@/utils/endpoint";
import { useStore } from "@/store/useStore";
import { useShallow } from "zustand/shallow";

import styles from "./styles.module.css";

type GameCardType = {
  game: Game;
}

export const GameCard = ({ game }: GameCardType) => {
  const { cart, setCart } = useStore(
      useShallow((state) => ({
        cart: state.cart,
        setCart: state.setCart,
      }))
    );

  const { genre, image, name, price, isNew } = game || null;

  return (
    <div className={styles.card}>
      <div className={styles.card__poster}>
        {isNew && <p className={styles.poster__tag}>New</p>}
        <img className={styles.poster__img} src={image} alt={name} />
      </div>
      <div className={styles.card__info}>
        <p className={styles.info__genre}>{genre}</p>
        <div className={styles.info__product}>
          <p className={styles.product__name}>{name}</p>
          <p className={styles.product__price}>${price}</p>
        </div>
      </div>
      <button
        className={styles.card__button}
        onClick={() => setCart([...cart, game])}
      >
        ADD TO CART
      </button>
    </div>
  );
};
