export interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export const Button = ({
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`font-bold py-2 px-4 rounded transition-colors duration-150 bg-blue-500 hover:bg-blue-700 text-white`}
      {...props}
    >
      {label}
    </button>
  );
};