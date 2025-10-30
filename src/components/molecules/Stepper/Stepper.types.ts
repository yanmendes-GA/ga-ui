export interface StepperProps {
  /**
   * O número total de passos.
   */
  totalSteps: number
  /**
   * O índice do passo atual (base 0).
   */
  currentStep: number
}

// Tipo interno para os estados
export type StepState = "completed" | "current" | "default"
