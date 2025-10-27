export interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export const Button = ({
  variant = "primary",
  label,
  ...props
}: ButtonProps) => {
  const primaryStyle = "bg-blue-500 hover:bg-blue-700 text-white";
  const secondaryStyle =
    "bg-gray-300 hover:bg-teal-400 text-gray-800";

  const style = variant === "primary" ? primaryStyle : secondaryStyle;

  return (
    <button
      type="button"
      className={`font-bold py-2 px-4 rounded transition-colors duration-150 ${style}`}
      {...props}
    >
      {label}
    </button>
  );
};