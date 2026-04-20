"use client";

import { SearchBar } from "./simpleSearchBar";
import { opcionesHero } from "../data/opcionesHero";
import { SimpleButton } from "./botones";
import { useState } from "react";

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <section className="flex flex-col items-center justify-center h-100 py-2 bg-secondary text-white">
      <h2 className="text-4xl font-bold mb-5 mt-6">
        Cursos de Psicología con Certificado en 2026
      </h2>
      <span className="text-base text-center">
        Vive la mejor experiencia de aprendizaje y potencia tus conocimientos
        através de nuestros cursos y diplomados.
      </span>
      <br />
      <SearchBar
        placeholder="¿Qué quieres aprender?"
        maxWidth="max-w-2xl"
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {opcionesHero.map((opcion: string) => (
          <SimpleButton
            aria-label={`Buscar cursos relacionados con ${opcion}`}
            key={opcion}
            label={opcion}
            onClick={() => setSearchTerm(opcion)}
            className={
              "bg-[#9B83FE] border-white transition-all hover:bg-white/10"
            }
          />
        ))}
      </div>
    </section>
  );
}
