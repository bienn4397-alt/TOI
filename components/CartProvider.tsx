"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type CartItem = {
  id: string;
  title: string;
  offer: string;
  price: number;
  quantity: number;
  photo?: string | null;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (item: CartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("eloria-cart");
      if (saved) setItems(JSON.parse(saved));
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem("eloria-cart", JSON.stringify(items));
  }, [items, ready]);

  const value = useMemo(() => ({
    items,
    count: items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    addItem: (item: CartItem) => setItems((current) => {
      const index = current.findIndex((x) => x.id === item.id);
      if (index === -1) return [...current, item];
      return current.map((x, i) => i === index ? { ...x, quantity: x.quantity + item.quantity } : x);
    }),
    updateQuantity: (id: string, quantity: number) => setItems((current) => current.map((x) => x.id === id ? { ...x, quantity: Math.max(1, quantity) } : x)),
    removeItem: (id: string) => setItems((current) => current.filter((x) => x.id !== id)),
    clear: () => setItems([]),
  }), [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
