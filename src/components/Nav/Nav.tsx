import React from "react";
import Link from "next/link";
import { CartIcon } from "@/assets";
import styles from "./styles.module.css";

export const Nav = () => {
  return (
    <header className={styles.nav}>
      <div  className={styles.nav__wrap}>
      <Link href="/" className={styles.nav__logo}>
        GamerShop
      </Link>
      <Link href="/cart" className="cart-icon">
        <CartIcon />
      </Link>
      </div>
    </header>
  );
};
