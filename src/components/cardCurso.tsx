"use client";
import { Card } from "@heroui/react";
import Image from "next/image";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { SimpleButton } from "./botones";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { TipoCurso } from "./tipoCurso";

interface Curso {
  id: string;
  title: string;
  imagen: string;
  fechaInicio: string;
  precio: number;
  descuento?: number | undefined;
  modalidad: string;
  rating?: number;
  imagenAlt: string;
}

interface CardCursoProps {
  curso: Curso;
  isPriority?: boolean;
}

export const CardCurso = ({ curso, isPriority = false }: CardCursoProps) => {
  const {
    title,
    imagen,
    fechaInicio,
    precio,
    descuento = 0,
    modalidad,
    rating,
    id,
    imagenAlt,
  } = curso;
  return (
    <Card className=" p-0 max-w-[340px] min-h-[450px] flex flex-col mt-4 border-none rounded-lg bg-white overflow-visible transition-all duration-500 cursor-pointer shadow-md hover:shadow-2xl hover:scale-102">
      <div className="relative w-full h-[200px] mb-2">
        <Image
          alt={imagenAlt}
          src={imagen}
          fill
          className="object-cover rounded-t-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={isPriority}
        />
        {rating && (
          <div className="absolute top-40 -left z-20 bg-[#5A5A5A] text-white px-3 py-1 rounded-r-lg flex items-center gap-1 shadow-md">
            <span className="font-bold text-lg">★ 5</span>
          </div>
        )}

        <TipoCurso type={modalidad} />
      </div>
      <div className="flex flex-col gap-2 px-4">
        <h3 className="text-black font-bold text-sm leading-tight line-clamp-2 items-center justify-start">
          {title}
        </h3>

        <p className="text-gray-600 text-sm flex items-center gap-1 justify-start">
          <CalendarDaysIcon className="w-4 h-4 text-secondary" />
          <span>inicio:</span> {fechaInicio}
        </p>
      </div>
      <div className="flex items-center gap-1 font-bold text-gray-700 px-4">
        <h2 className="text-lg font-extrabold text-number">
          $ {(precio - descuento * precio || precio).toLocaleString("es-CO")}{" "}
          COP
        </h2>
        {descuento > 0 && (
          <span className="bg-primary px-2 rounded-lg text-white text-sm ">
            {descuento * 100}% OFF
          </span>
        )}
      </div>
      {descuento > 0 && (
        <div className="flex items-center gap-1  text-gray-400 px-4">
          <h3 className="line-through">${precio.toLocaleString("es-CO")} </h3>{" "}
          <span>COP</span>
        </div>
      )}
      <div className="flex items-center gap-2 mt-auto px-4 mb-2">
        <SimpleButton
          label="Ver curso"
          className="w-full bg-white  border border-solid border-secondary hover:bg-secondary hover:text-white transition-colors duration-300 py-2"
          onClick={() => console.log("Ver curso")}
          ariaLabel={`Ver detalles del curso de ${title}`}
        />
        <SimpleButton
          label="carrito de compra"
          className="w-[30%] bg-secondary boder border-solid hover:bg-primary text-white transition-colors duration-300 items-center justify-center flex py-2"
          onClick={() => console.log(id)}
          ariaLabel={`Agregar al carrito de compra del curso ${title}`}
        >
          <ShoppingCartIcon className="w-5 h-5 text-white" /> +
        </SimpleButton>
      </div>
    </Card>
  );
};
