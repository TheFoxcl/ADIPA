"use client";
import { CardCurso } from "./cardCurso";
import { motion, AnimatePresence } from "framer-motion";

export interface Curso {
  id: string;
  title: string;
  categoria: string;
  fechaInicio: string;
  precio: number;
  descuento?: number;
  rating?: number;
  imagen: string;
  imagenAlt: string;
  modalidad: string;
}

interface CursosGrillaProps {
  cursosFiltrados: Curso[];
}

export const CursosGrilla = ({ cursosFiltrados }: CursosGrillaProps) => {
  return (
    <section>
      <h3 className="text-2xl font-bold mb-6 text-secondary">
        Cursos que te permitirán potenciar tu carrera.
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {cursosFiltrados && cursosFiltrados.length > 0 ? (
            cursosFiltrados.map((curso, index) => (
              <motion.div
                key={curso.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                layout
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 25,
                }}
              >
                <CardCurso curso={curso} isPriority={index < 3} />
              </motion.div>
            ))
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-10 text-gray-500"
            >
              No se encontraron cursos con estos filtros.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
