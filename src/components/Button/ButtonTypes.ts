export interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "info";
  onClick?: () => void;
}