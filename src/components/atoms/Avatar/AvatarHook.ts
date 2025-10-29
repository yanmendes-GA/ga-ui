import { useState } from "react"

const useAvatar = (): {
  imageError: boolean
  handleImageError: () => void
  getInitials: (name: string) => string
} => {
  const [imageError, setImageError] = useState<boolean>(false)

  function handleImageError() {
    setImageError(true)
  }

  function getInitials(name: string): string {
    return name
      .split(" ")
      .map(word => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return { imageError, handleImageError, getInitials }
}

export default useAvatar
