"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Curso } from "../components/cursosGrilla";

interface CartContextType {
  carrito: Curso[];
  agregarAlCarrito: (curso: Curso) => void;
  eliminarDelCarrito: (id: string) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [carrito, setCarrito] = useState<Curso[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const agregarAlCarrito = (curso: Curso) => {
    if (!carrito.find((c) => c.id === curso.id)) {
      setCarrito((prev) => [...prev, curso]);
    }
    setIsCartOpen(true);
  };

  const eliminarDelCarrito = (id: string) => {
    setCarrito((prev) => prev.filter((c) => c.id !== id));
  };

  const total = carrito.reduce((acc, c) => {
    const precioConDescuento = c.precio - (c.descuento ?? 0) * c.precio;
    return acc + precioConDescuento;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        isCartOpen,
        setIsCartOpen,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCart debe usarse dentro de un CartProvider");
  return context;
};
