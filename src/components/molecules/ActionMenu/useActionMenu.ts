import { useState, useRef, useEffect, useId } from "react"

export const useActionMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

  const closeMenu = () => setIsOpen(false)
  const toggleMenu = () => setIsOpen(prev => !prev)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        closeMenu()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [wrapperRef])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const getTriggerProps = (originalOnClick?: (e: React.MouseEvent) => void) => {
    return {
      "aria-haspopup": "menu",
      "aria-expanded": isOpen,
      "aria-controls": isOpen ? menuId : undefined,
      onClick: (e: React.MouseEvent) => {
        toggleMenu()
        originalOnClick?.(e)
      },
    }
  }

  return {
    isOpen,
    toggleMenu,
    closeMenu,
    wrapperRef,
    menuId,
    getTriggerProps,
  }
}
