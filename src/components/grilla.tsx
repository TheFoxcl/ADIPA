"use client";
import { useState } from "react";
import { CursosGrilla } from "@/components/cursosGrilla";
import { FiltroCategorias } from "./filtro";
import { cursosDisponibles } from "../data/cursosDisponibles";
import { filtrarPorPropiedad } from "@/utilities/filter";

export const Grilla = () => {
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState<
    string[]
  >([]);

  const cursosFiltrados = filtrarPorPropiedad(
    cursosDisponibles,
    categoriasSeleccionadas,
    "categoria",
  );

  return (
    <section className="mt-8 mr-20 relative w-full h-full flex gap-4 px-4">
      <aside
        aria-label="filtros"
        className="w-[25%] sticky top-40 h-fit pl-30 border-r border-gray-300"
      >
        <FiltroCategorias
          onSelectionChange={setCategoriasSeleccionadas}
          categorias={[
            "Neurociencias",
            "Psicología clínica",
            "Psicología infantil",
            "Psicología organizacional",
          ]}
          filterName="Categorias"
        />
      </aside>

      <CursosGrilla cursosFiltrados={cursosFiltrados} />
    </section>
  );
};
