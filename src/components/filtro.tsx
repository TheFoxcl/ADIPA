"use client";
import { useState } from "react";
import { CheckboxGroup, Checkbox, Label } from "@heroui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

interface FiltroCategoriasProps {
  onSelectionChange: (val: string[]) => void;
  categorias: string[];
  filterName?: string;
}

export const FiltroCategorias = ({
  onSelectionChange,
  categorias,
  filterName,
}: FiltroCategoriasProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full border-b border-gray-100 pb-2 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full py-2 group cursor-pointer"
      >
        <span className="text-secondary font-extrabold text-lg">
          {filterName}
        </span>
        <ChevronUpIcon
          className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
            isOpen ? "" : "rotate-180"
          }`}
        />
      </button>

      <div
        className={`transition-all overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <CheckboxGroup
          onChange={(valores) => {
            onSelectionChange(valores);
          }}
          className="flex flex-col gap-3"
        >
          {categorias.map((categoria) => (
            <Checkbox
              key={categoria}
              value={categoria}
              className="flex items-center gap-2"
              aria-label={`Check para filtrar por ${categoria}`}
            >
              <Checkbox.Control
                className="border border-gray-200"
                aria-label={`Check para filtrar por ${categoria}`}
              >
                <Checkbox.Indicator
                  aria-label={`Check para filtrar por ${categoria}`}
                />
              </Checkbox.Control>
              <Checkbox.Content aria-label={`${categoria}`}>
                <Label htmlFor="label-filter" className="text-black">
                  {categoria}
                </Label>
              </Checkbox.Content>
            </Checkbox>
          ))}
        </CheckboxGroup>
      </div>
    </div>
  );
};
