import { useEffect, useState } from "react"
import { getBarWrapperStyles, getBarSegmentStyles } from "./Stepper.styles"
import type { StepState } from "./Stepper.types"
import { cn } from "@/utils/cn"

const ITEM_SIZE_PX = 14
const ITEM_GAP_PX = 4
const TOTAL_ITEM_WIDTH = ITEM_SIZE_PX + ITEM_GAP_PX

type DynamicBarsProps = {
  state: StepState
  wrapperRef: React.RefObject<HTMLDivElement>
}

export function DynamicBars({ state, wrapperRef }: DynamicBarsProps) {
  const [barsCount, setBarsCount] = useState(0)

  useEffect(() => {
    function updateBars() {
      if (wrapperRef.current) {
        const wrapperWidth = wrapperRef.current.offsetWidth
        const count = Math.floor(wrapperWidth / TOTAL_ITEM_WIDTH)
        setBarsCount(count)
      }
    }

    const resizeObserver = new ResizeObserver(() => {
      updateBars()
    })

    if (wrapperRef.current) {
      resizeObserver.observe(wrapperRef.current)
    }

    return () => resizeObserver.disconnect()
  }, [])

  return (
    <div
      ref={wrapperRef}
      className={cn(getBarWrapperStyles())}
    >
      {Array.from({ length: barsCount }).map((_, i) => (
        <div
          key={i}
          className={cn(getBarSegmentStyles(state))}
        />
      ))}
    </div>
  )
}
