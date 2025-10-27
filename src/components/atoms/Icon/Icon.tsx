import type { IconProps } from "./IconTypes";

const iconSizes = {
  sm: "12px",
  md: "16px",
  lg: "20px",
  xl: "80px",
};

export const Icon = ({ name, color, size = "sm" }: IconProps) => {
  return (
    <i
      className={`fi fi-rs-${name} flex items-center justify-center text-[${iconSizes[size]}]`}
      style={{ color: `hsl(var(--${color}))` }}
    />
  );
}
