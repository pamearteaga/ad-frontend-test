"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useStore } from "@/store/useStore";
import { useShallow } from "zustand/shallow";
import { urlFormat, removeItemFromCart } from "@/utils/";
import { ItemShop, Summary, Loader } from "@/components";
import { Arrow } from "@/assets";

import styles from "./styles.module.css";

const Cart = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre") || "all";

  const { cart, setCart } = useStore(
    useShallow((state) => ({
      cart: state.cart,
      setCart: state.setCart,
    }))
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className={styles.cart}>
      <div className={styles.cart_back}>
        <Link href={urlFormat(genre)} className={styles.back_link}>
          <Arrow /> Back to Catalog
        </Link>
      </div>
      {isLoading ? (
        <Loader />
      ) : cart?.length === 0 ? (
        <>
          <h1 className="title">Your Cart is Empty</h1>
        </>
      ) : (
        <>
          <div className={styles.cart_head}>
            <h1 className="title">Your Cart</h1>
            <h2 className="subtitle">{cart.length} Items </h2>
          </div>
          <div className={styles.cart_content}>
            <div className={styles.content_items}>
              {cart?.map((item) => (
                <ItemShop
                  key={item.id}
                  item={{ ...item }}
                  removeItem={(id) => setCart(removeItemFromCart(id, cart))}
                />
              ))}
            </div>
            <Summary items={cart} />
          </div>
        </>
      )}
    </main>
  );
};

export default Cart;
