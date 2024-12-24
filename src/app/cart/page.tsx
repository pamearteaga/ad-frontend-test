'use client';
import Link from "next/link";

const Cart = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Shopping Cart</h1>
      <Link href="/" className="back-to-catalog">Back to Catalog</Link>
    </main>
  );
}

export default Cart;