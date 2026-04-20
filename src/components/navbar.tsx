"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";
import { SearchField } from "@heroui/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Botonera } from "./botonera";

export const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "iniciar sesion", href: "/" },
    { name: "Registrate", href: "/" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full  backdrop-blur-md mt-2 sticky top-0">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between">
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
        >
          <SearchField.Group
            className="flex items-center gap-2 
            border border-solid border-primary
            rounded-lg bg-white
            focus-within:ring-2 focus-within:ring-primary 
            transition-all duration-300"
          >
            <SearchField.Input
              aria-required="false"
              className="w-full md:w-[400px] px-4 py-2"
              placeholder="¿Qué quieres aprender?"
            />
            <button
              type="submit"
              aria-label="Buscar"
              className="bg-primary text-white w-full md:w-12 h-full m-0 cursor-pointer flex items-center transition-colors hover:bg-primary/90"
            >
              <SearchField.SearchIcon className="text-white w-5 h-5" />
            </button>
          </SearchField.Group>
        </SearchField>

        {/* Desktop Links (1280px+) & Tablet (768px+) */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Button
              key={link.name}
              className="bg-primary text-white text-sm font-medium hover:bg-secondary transition-colors duration-300 ease-in-outrounded-none px-4 py-2"
            >
              {link.name}
            </Button>
          ))}
          <Button className="w-full bg-primary text-white text-sm font-medium hover:bg-secondary transition-colors duration-300 ease-in-outrounded-none px-4 py-2">
            <ShoppingCartIcon className="w-7 h-7" />
          </Button>
        </div>

        {/* Mobile Button (375px) */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground focus:outline-none"
            aria-label="Toggle Menu"
          >
            {/* Simple Icono Hamburguesa */}
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-current transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-opacity ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-4 bg-current transition-transform ${isOpen ? "-rotate-45 -translate-y-2 w-6" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between">
        <Botonera />
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-64 border-b border-divider" : "max-h-0"}`}
      >
        <div className="flex flex-col gap-4 p-6 bg-background">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Button className="w-full bg-primary text-white text-sm font-medium hover:bg-secondary transition-colors duration-300 ease-in-outrounded-none px-4 py-2">
            <ShoppingCartIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
