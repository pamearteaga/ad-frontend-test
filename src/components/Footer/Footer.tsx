import React from "react";
import { ADlogo } from "@/assets";
import Link from "next/link";
import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer} data-testid="footer">
      <div className={styles.footer__wrap}>
        <p>Pamela Arteaga | 2025</p>
      </div>
    </footer>
  );
};
