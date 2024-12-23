import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apply Digital Test",
  description: "Frontend development test for Apply Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-between p-4">
          <Link href="/" className="logo">Logo</Link>
          <Link href="/cart" className="cart-icon">Cart</Link>
        </header>
        {children}
        <footer className="p-4">
          <Link href="/" className="logo">Apply Digital</Link>
        </footer>
      </body>
    </html>
  );
}
