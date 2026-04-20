"use client";
import { useState } from "react";
import { CursosGrilla } from "@/components/cursosGrilla";
import { FiltroCategorias } from "./filtro";
import { cursosDisponibles } from "../data/cursosDisponibles";
import { filtrarPorPropiedad } from "@/utilities/filter";
import { SimpleButton } from "./botones";

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
    <section className="my-10 mr-20 relative w-full h-full flex gap-4 px-4">
      <aside
        aria-label="seccion filtros"
        className="hidden lg:block w-[25%] sticky top-40 h-fit border-r border-gray-300 pr-4"
      >
        <FiltroCategorias
          value={categoriasSeleccionadas}
          onSelectionChange={setCategoriasSeleccionadas}
          categorias={[
            "Neurociencias",
            "Psicología clínica",
            "Psicología infantil",
            "Psicología organizacional",
          ]}
          filterName="Categorias"
        />
        <div className="w-full flex justify-center mt-4">
          <SimpleButton
            label="ver todos"
            ariaLabel="botn que reinicia todos los filtros o muestra todos lso cursos"
            onClick={() => setCategoriasSeleccionadas([])}
            className="px-3 bg-secondary text-white hover:bg-primary transition-colors duration-300 py-2"
          />
        </div>
      </aside>

      <CursosGrilla cursosFiltrados={cursosFiltrados} />
    </section>
  );
};
