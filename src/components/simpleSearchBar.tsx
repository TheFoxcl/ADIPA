import { SearchField } from "@heroui/react";

interface SearchBarProps {
  placeholder?: string;
  maxWidth?: string;
  searchTerm?: string;
  setSearchTerm: (value: string) => void;
}

export const SearchBar = ({
  placeholder,
  maxWidth,
  searchTerm,
  setSearchTerm,
}: SearchBarProps) => {
  return (
    <div className={`relative w-full ${maxWidth} group`}>
      <input
        value={searchTerm}
        type="text"
        placeholder={placeholder}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
          w-full 
          bg-transparent 
          py-3 
          pr-12 
          border-b 
          outline-none 
          border-white/50 
          transition-all 
          duration-50
          focus:border-white 
          focus:border-b-2 
          text-center 
          text-lg md:text-xl
        "
      />
      <button
        type="submit"
        aria-label="Buscar"
        className="absolute right-0 bottom-1 p-2 cursor-pointer transition-transform hover:scale-110 active:opacity-70"
      >
        <SearchField.SearchIcon className="text-white w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  );
};
