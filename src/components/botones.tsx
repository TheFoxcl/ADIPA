interface SimpleButtonProps {
  onClick?: () => void;
  label: string;
  className?: string;
  key?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
}

export const SimpleButton = ({
  label,
  onClick,
  className = "",
  ariaLabel,
  children,
}: SimpleButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={`
        border border-solid
        rounded-lg
        px-2 py-1 
				cursor-pointer
        ${className} 
      `}
    >
      {children || label}
    </button>
  );
};
