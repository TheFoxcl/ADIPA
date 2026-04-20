import { useState } from "react";
import { DropOptions } from "./dropOptions";
import { descubreOptions } from "../data/optionsDescubre";
import { recursosOptions } from "../data/optionsRecursos";

export const Botonera = () => {
  const [seminariosGratis, setSeminariosGratis] = useState(true);
  const [congresoNuevo, setCongresoNuevo] = useState(true);
  return (
    <div className="hidden md:flex items-center justify-between gap-6 w-full py-2 border-t border-gray-100 text-sm">
      <DropOptions title="Descubre ADIPA" options={descubreOptions} />
      <DropOptions title="Recursos" options={recursosOptions} />

      <div className="relative group cursor-pointer  hover:text-primary transition-colors mr-auto">
        {seminariosGratis && (
          <span className="absolute -top-4 left-1/2 -translate-x-1 bg-secondary text-white text-[8px] font-bold px-1.5 py-0.5 rounded-sm uppercase">
            Gratis
          </span>
        )}
        <span>Seminarios</span>
      </div>

      <div className="relative group cursor-pointer  font-bold hover:text-primary transition-colors mr-auto">
        {congresoNuevo && (
          <span className="absolute -top-4 left-1/2 -translate-x-1 bg-[#ff007a] text-white text-[8px] px-1.5 py-0.5 rounded-sm uppercase">
            Nuevo
          </span>
        )}
        <span>Congreso</span>
      </div>

      <a href="#" className=" hover:text-primary transition-colors mr-auto">
        Especializaciones
      </a>
      <a href="#" className=" hover:text-primary transition-colors mr-auto">
        Acreditaciones
      </a>
      <a href="#" className=" hover:text-primary transition-colors mr-auto">
        Sesiones Magistrales
      </a>
      <a href="#" className=" hover:text-primary transition-colors mr-auto">
        Diplomados
      </a>

      {/* 7. Cursos (Destacado en Negrita) */}
      <a
        href="#"
        className=" font-bold hover:text-primary transition-colors mr-auto"
      >
        Cursos
      </a>
    </div>
  );
};
