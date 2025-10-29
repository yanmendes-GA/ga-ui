// src/types/images.d.ts

declare module "*.png" {
  const value: string
  export default value
}

declare module "*.jpg" {
  const value: string
  export default value
}

declare module "*.jpeg" {
  const value: string
  export default value
}

declare module "*.gif" {
  const value: string
  export default value
}

declare module "*.webp" {
  const value: string
  export default value
}

/**
 * Para SVGs, especialmente com React (usando SVGR)
 * Isso permite: import Logo from './logo.svg' (como URL/string)
 * E também: import { ReactComponent as Logo } from './logo.svg' (como componente)
 */
declare module "*.svg" {
  import * as React from "react"

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >

  const src: string
  export default src
}
