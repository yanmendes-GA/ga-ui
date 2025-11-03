import type { AvatarProps } from "./Avatar.types"
import { getAvatarStyles } from "./Avatar.styles"
import useAvatar from "./Avatar.hook"

export const Avatar = ({
  src,
  alt,
  size = "md",
  variant = "default",
  fallback,
}: AvatarProps) => {
  const { imageError, handleImageError, getInitials } = useAvatar()
  const styles = getAvatarStyles({ size, variant })

  const shouldShowFallback = !src || imageError
  const displayFallback = fallback || getInitials(alt ? alt : "")

  return (
    <div className={styles.wrapper}>
      {shouldShowFallback ? (
        <span>{displayFallback}</span>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={handleImageError}
          className={styles.image}
        />
      )}
    </div>
  )
}
