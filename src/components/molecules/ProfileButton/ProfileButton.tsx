import type { ProfileButtonProps } from "./ProfileButton.types"
import {
  getProfileButtonStyles,
  getTextWrapperStyles,
  getNameStyles,
  getRoleStyles,
} from "./ProfileButton.styles"
import { Avatar } from "@/atoms/Avatar"
import { Icon } from "@/atoms/Icon"

export const ProfileButton = ({
  name,
  role,
  avatarProps,
  disabled = false,
  ...rest
}: ProfileButtonProps) => {
  return (
    <button
      className={getProfileButtonStyles({ disabled })}
      disabled={disabled}
      aria-label={`${name}, ${role}`}
      {...rest}
    >
      <Avatar
        alt={avatarProps?.alt}
        src={avatarProps?.src}
        variant={avatarProps?.variant}
        size={avatarProps?.size}
      />

      <div className={getTextWrapperStyles()}>
        <span className={getNameStyles()}>{name}</span>
        <span className={getRoleStyles()}>{role}</span>
      </div>

      <Icon name="angles-up-down" />
    </button>
  )
}
