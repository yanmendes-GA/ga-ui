import { cn } from "@/utils/cn"

export const getProfileInfoCardStyles = () => ({
  container: cn("flex w-full max-w-sm flex-col items-center gap-[10px]"),

  avatar: cn(
    "flex h-32 w-32 items-center justify-center rounded-full",
    "bg-primary",
    "font-bold text-4xl text-primary-100",
  ),

  userInfo: cn("flex flex-col items-center gap-1 text-center"),

  name: cn("font-bold text-xl text-dark-100"),

  company: cn("text-[12px] italic text-dark-100"),

  infoList: cn("flex w-full flex-col gap-4 pt-4"),

  infoItem: cn(
    "flex h-[56px] items-center justify-center rounded-[8px]",
    "px-[32px]",
    "bg-dark-400 text-dark-100",
  ),
})
