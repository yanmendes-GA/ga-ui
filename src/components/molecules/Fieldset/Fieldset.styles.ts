import { cn } from "@/utils/cn"

type StyleProps = {
  focused: boolean
}

export const getFieldsetStyles = ({ focused }: StyleProps) => {
  return cn(
    "relative border p-4 transition-colors duration-200 rounded-lg",
    focused ? "border-primary" : "border-dark-400",
  )
}

export const getLegendStyles = () => {
  return cn("relative px-2 text-sm transition-colors duration-200")
}

export const getLegendLabelStyles = ({ focused }: StyleProps) => {
  return cn("z-10 mx-1", focused ? "font-bold text-dark" : "text-dark-100")
}

export const getLegendBgStyles = ({ focused }: StyleProps) => {
  return cn(
    "absolute w-full h-full top-0 left-0 skew-x-[-40deg] rounded-tl-sm rounded-bl-[2px] rounded-br-sm rounded-tr-[2px] transition-colors",
    focused ? "bg-primary" : "bg-dark-400",
  )
}
