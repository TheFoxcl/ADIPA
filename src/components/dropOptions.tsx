import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface DropMenuProps {
  title: string;
  options: string[];
  showChevron?: boolean;
}

export const DropOptions = ({
  title,
  options,
  showChevron = true,
}: DropMenuProps) => {
  const [isDescubreOpen, setIsDescubreOpen] = useState(false);

  return (
    <div className="hidden md:flex items-center border-t border-gray-100 text-sm mr-auto">
      <div
        className="relative mr-auto"
        onMouseEnter={() => setIsDescubreOpen(true)}
        onMouseLeave={() => setIsDescubreOpen(false)}
      >
        <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors py-2 ">
          <span>{title}</span>
          {showChevron && (
            <ChevronDownIcon
              className={`w-4 h-4 transition-transform duration-400 ${isDescubreOpen ? "rotate-180" : ""}`}
            />
          )}
        </div>
        <div
          className={`
            absolute top-full left-0 w-48 bg-[#f4f4f5] border-none transition-all duration-500 origin-top
            ${
              isDescubreOpen
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none"
            }
          `}
        >
          <ul className="py-2">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-secondary hover:text-white cursor-pointer transition-colors duration-300"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
