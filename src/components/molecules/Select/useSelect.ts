import { useState, useRef, useEffect, useId } from "react"

export const useSelect = () => {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const listboxId = useId()

  const openMenu = () => setIsOpen(true)
  const closeMenu = () => setIsOpen(false)
  const toggleMenu = () => setIsOpen(prev => !prev)

  // Efeito para fechar o menu ao clicar fora
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

  // Efeito para fechar o menu ao pressionar "Escape"
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
      "aria-expanded": isOpen,
      "aria-controls": isOpen ? listboxId : undefined,
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
    listboxId,
    getTriggerProps,
  }
}
