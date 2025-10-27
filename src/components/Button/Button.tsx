import type { ButtonProps } from "./ButtonTypes";
import { cn } from "../../utils/cn";

export const Button = ({
  variant = "primary",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn("font-bold py-2 px-4 rounded transition-colors duration-150", {
        "bg-blue-500 hover:bg-blue-700 text-white": variant === "primary",
        "bg-gray-300 hover:bg-teal-400 text-gray-800": variant === "secondary",
      })}
      {...props}
    >
      {label}
    </button>
  );
};