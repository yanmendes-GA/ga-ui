import type { AvatarProps } from "./Avatar.types"
import { getAvatarStyles } from "./Avatar.styles"
import useAvatar from "./Avatar.hook"

export const Avatar = ({
  src,
  alt,
  size = "md",
  variant = "primary",
  fallback,
}: AvatarProps) => {
  const { imageError, handleImageError, getInitials } = useAvatar()

  const shouldShowFallback = !src || imageError
  const displayFallback = fallback || getInitials(alt)

  return (
    <div className={getAvatarStyles({ size, variant })}>
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
  )
}
