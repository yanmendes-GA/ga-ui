import type { ProfileInfoCardProps } from "./ProfileInfoCard.types"
import { getProfileInfoCardStyles } from "./ProfileInfoCard.styles"
import { Avatar } from "@/atoms/Avatar"

export const ProfileInfoCard = ({
  name,
  company,
  avatarProps,
  infoItems = [],
}: ProfileInfoCardProps) => {
  const styles = getProfileInfoCardStyles()
  const { src, size = "xl", variant = "primary" } = avatarProps

  return (
    <div className={styles.container}>
      <Avatar
        alt={name}
        src={src}
        size={size}
        variant={variant}
      />

      <div className={styles.userInfo}>
        <span className={styles.name}>{name}</span>
        <span className={styles.company}>{company}</span>
      </div>

      <div className={styles.infoList}>
        {infoItems.map(item => (
          <div
            key={item}
            className={styles.infoItem}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
