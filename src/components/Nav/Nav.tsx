"use client";
import React from "react";
import Link from "next/link";
import { useStore } from "@/store/useStore";
import { useShallow } from "zustand/shallow";
import { CartIcon } from "@/assets";

import styles from "./styles.module.css";

export const Nav = () => {
  const { cart } = useStore(
    useShallow((state) => ({
      cart: state.cart,
    }))
  );

  return (
    <header className={styles.nav}>
      <div className={styles.nav_wrap}>
        <Link href="/" className={styles.nav_logo}>
          GamerShop
        </Link>
        <Link href="/cart" className={styles.nav_icon}>
          <CartIcon />
          {cart.length > 0 && <span className={styles.icon_items}>{cart.length}</span>}
        </Link>
      </div>
    </header>
  );
};
