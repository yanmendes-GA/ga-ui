import { useState } from "react";
import type { AvatarProps } from "./AvatarTypes";

const sizeClasses = {
  sm: "h-[40px] w-[40px] text-[16px]",
  md: "h-[50px] w-[50px] text-[20px]",
  lg: "h-[80px] w-[80px] text-[32px]",
  xl: "h-[150px] w-[150px] text-[48px]",
};

const variantClasses = {
  default: "bg-dark-500 border border-primary",
  primary: "bg-primary",
};

export const Avatar = ({
  src,
  alt,
  size = "md",
  variant = "default",
  fallback,
  className = "",
}: AvatarProps) => {
  const [imageError, setImageError] = useState(false);

  function handleImageError(): void {
    setImageError(true);
  }

  function getInitials(name: string): string {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  }

  const shouldShowFallback = !src || imageError;
  const displayFallback = fallback || getInitials(alt);

  return (
    <div
      className={`hover:shadow-elegant relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold text-primary-100 transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {shouldShowFallback ? (
        <span>{displayFallback}</span>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={handleImageError}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}
