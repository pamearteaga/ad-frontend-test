import React from "react";
import { Game } from "@/utils/endpoint";
import { RemoveIcon } from "@/assets";

import styles from "./styles.module.css";

type ItemShopType = {
  item: Game;
  removeItem: (id: string) => void;
};

export const ItemShop = ({ item, removeItem }: ItemShopType) => {
  const { id, genre, image, name, description, price, isNew } = item || null;

  return (
    <div className={styles.itemShop}>
      <div className={styles.itemShop_remove} onClick={() => removeItem(id)}>
        <RemoveIcon />
      </div>
      <div className={styles.itemShop_poster}>
        {isNew && <p className={styles.poster__tag}>New</p>}
        <img className={styles.poster_img} src={image} alt={name} />
      </div>
      <div className={styles.itemShop_info}>
        <div className={styles.info_item}>
          <p className={styles.item_genre}>{genre}</p>
          <p className={styles.item_name}>{name}</p>
          <p className={styles.item_description}>{description}</p>
        </div>
        <div className={styles.info_price}>
          <p className={styles.price}>${price}</p>
        </div>
      </div>
    </div>
  );
};
