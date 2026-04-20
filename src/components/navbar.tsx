"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";
import { SearchField } from "@heroui/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Botonera } from "./botonera";
import { useCart } from "@/context/CartContext";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsCartOpen, carrito } = useCart();

  const navLinks = [
    { name: "iniciar sesion", href: "/" },
    { name: "Registrate", href: "/" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full  backdrop-blur-md mt-2 sticky top-0 md:mx-4 xs:mx-4">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center  lg:justify-between justify-center gap-10">
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <XMarkIcon className="w-8 h-8 transition-all duration-300 rotate-0" />
            ) : (
              <Bars3Icon className="w-8 h-8 transition-all duration-300" />
            )}
          </button>
        </div>
        <div className="flex items-center cursor-pointer display-block">
          <Image
            src="https://storage.googleapis.com/statics-files-adipa-cl/dist_compress/dist/img/icons/logo-adipa.svg"
            alt="ADIPA"
            width="182"
            height="35"
          />
        </div>
        <SearchField
          name="buscador"
          aria-label="Buscador de cursos y proyectos"
          className="flex justify-end"
        >
          <SearchField.Group
            className="flex items-center 
            border border-solid border-primary bg-white
            focus-within:ring-2 focus-within:ring-primary 
            transition-all duration-300
            rounded-full lg:rounded-lg 
            w-fit"
          >
            <SearchField.Input
              aria-required="false"
              placeholder="¿Qué quieres aprender?"
              className="hidden lg:block w-[400px] px-4 py-2 outline-none text-black bg-transparent"
            />

            <button
              type="submit"
              aria-label="Buscar"
              className="bg-primary text-white cursor-pointer flex items-center justify-center transition-colors hover:bg-primary/90 w-10 h-10 rounded-full lg:w-12 lg:h-full lg:rounded-none lg:m-0"
            >
              <SearchField.SearchIcon className="text-white w-5 h-5 ml-0" />
            </button>
          </SearchField.Group>
        </SearchField>
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Button
              key={link.name}
              className="bg-primary text-white text-sm font-medium hover:bg-secondary transition-colors duration-300 ease-in-outrounded-none px-4 py-2"
            >
              {link.name}
            </Button>
          ))}
          <Button
            className="w-full bg-primary text-white text-sm font-medium hover:bg-secondary transition-colors duration-300 ease-in-outrounded-none px-4 py-2"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCartIcon className="w-7 h-7" />
            {carrito.length}
          </Button>
        </div>
      </div>
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between">
        <Botonera />
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-64 border-b border-divider" : "max-h-0"}`}
      >
        <div className="flex flex-col gap-3 p-6 bg-background items-center justify-center">
          {navLinks.map((link) => (
            <Button
              key={link.name}
              className="bg-primary text-white text-sm font-medium hover:bg-secondary transition-colors duration-300 ease-in-outrounded-none px-4 py-2 w-[50%] "
            >
              {link.name}
            </Button>
          ))}
          <Button
            className="w-[50%] bg-primary text-white text-sm font-medium hover:bg-secondary transition-colors duration-300 ease-in-outrounded-none px-4 py-2"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCartIcon className="w-7 h-7" />
            {carrito.length}
          </Button>
        </div>
      </div>
    </nav>
  );
};
