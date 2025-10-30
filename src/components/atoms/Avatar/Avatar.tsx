import type { AvatarProps } from "./Avatar.types"
import { getAvatarWrapperStyles, getAvatarImageStyles } from "./Avatar.styles"
import useAvatar from "./Avatar.hook"

export const Avatar = ({
  src,
  alt,
  size = "md",
  variant = "default",
  fallback,
}: AvatarProps) => {
  const { imageError, handleImageError, getInitials } = useAvatar()

  const shouldShowFallback = !src || imageError
  const displayFallback = fallback || getInitials(alt)

  return (
    <div className={getAvatarWrapperStyles({ size, variant })}>
      {shouldShowFallback ? (
        <span>{displayFallback}</span>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={handleImageError}
          className={getAvatarImageStyles()}
        />
      )}
    </div>
  )
}
