import React from "react";
import { ADlogo } from "@/assets";
import Link from "next/link";
import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrap}>
        <Link href="/" className="logo">
          <ADlogo />
        </Link>
      </div>
    </footer>
  );
};
