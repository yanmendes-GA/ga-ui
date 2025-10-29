import { cn } from "@/utils/cn"
import type { AvatarProps } from "./Avatar.types"

const sizeClasses = {
  sm: "h-[40px] w-[40px] text-[16px]",
  md: "h-[50px] w-[50px] text-[20px]",
  lg: "h-[80px] w-[80px] text-[32px]",
  xl: "h-[150px] w-[150px] text-[48px]",
}

const variantClasses = {
  default: "bg-dark-500 border border-primary",
  primary: "bg-primary",
}

type ButtonStyleProps = Pick<AvatarProps, "variant" | "size">

export const getAvatarStyles = ({
  variant = "default",
  size = "md",
}: ButtonStyleProps) => {
  return cn(
    "hover:shadow-elegant relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold text-primary-100 transition-all duration-300",
    sizeClasses[size],
    variantClasses[variant],
  )
}
