import { useState, useEffect, useRef } from "react"

interface UseToastProps {
  onClose: () => void
  autoClose?: number
}

export const useToast = ({ onClose, autoClose = 4000 }: UseToastProps) => {
  const [show, setShow] = useState(false)
  const [progress, setProgress] = useState(100)
  const [paused, setPaused] = useState(false)
  const [startTime, setStartTime] = useState(Date.now())
  const [remaining, setRemaining] = useState(autoClose)

  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setStartTime(Date.now())
    setRemaining(autoClose)
    setProgress(100)
    setPaused(false)

    const entryTimer = setTimeout(() => {
      setShow(true)
    }, 10)

    return () => {
      clearTimeout(entryTimer)
      if (timerRef.current) clearInterval(timerRef.current)
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    }
  }, [autoClose])

  useEffect(() => {
    if (!show || paused || autoClose <= 0) {
      return
    }

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime
      const left = Math.max(autoClose - elapsed, 0)

      setRemaining(left)
      setProgress((left / autoClose) * 100)

      if (left <= 0) {
        if (timerRef.current) clearInterval(timerRef.current)
        setShow(false)
        closeTimeoutRef.current = setTimeout(onClose, 400)
      }
    }, 50)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [show, paused, startTime, autoClose, onClose])

  const handleMouseEnter = () => {
    setPaused(true)
    if (timerRef.current) clearInterval(timerRef.current)
  }

  const handleMouseLeave = () => {
    setPaused(false)
    setStartTime(Date.now() - (autoClose - remaining))
  }

  const handleClose = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    setShow(false)
    closeTimeoutRef.current = setTimeout(onClose, 400)
  }

  return {
    show,
    progress,
    paused,
    handleMouseEnter,
    handleMouseLeave,
    handleClose,
  }
}
