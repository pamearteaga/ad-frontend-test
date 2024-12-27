import React from "react";
import { Button } from "../Button/Button";
import { Game } from "@/utils/endpoint";
import { sumPrices } from "@/utils/sumPrices";

import styles from "./styles.module.css";

type SummaryType = {
  items: Game[];
};

export const Summary = ({ items }: SummaryType) => {
  return (
    <div className={styles.summary}>
      <div className={styles.summary_items}>
        <div className={styles.summary_head}>
          <h2 className={styles.summary_title}>Order Summary</h2>
          <p className={styles.summary_qty}>{items.length} Items </p>
        </div>
        {items?.map((item) => (
          <div key={item.id} className={styles.summary_item}>
            <p className={styles.item_name}>{item.name}</p>
            <p>${item.price}</p>
          </div>
        ))}
        <div className={styles.summary_total}>
          <p className={styles.item_name}>Order Total</p>
          <p>${sumPrices(items)}</p>
        </div>
      </div>
      <div className={styles.summary_button}>
        <Button widthFull label="Checkout" handleClick={() => true} />
      </div>
    </div>
  );
};
