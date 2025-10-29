import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type DragEvent,
  type ChangeEvent,
} from "react"
import type { FileUploaderProps } from "./FileUploader.types"

type UseFileUploaderProps = Pick<
  FileUploaderProps,
  "initialFile" | "onFileSelect" | "onView" | "acceptedFileTypes" | "disabled"
>

/**
 * Hook customizado para encapsular a lógica do FileUploader.
 * Gerencia o estado do arquivo, o estado de drag-and-drop,
 * e retorna os manipuladores de evento e props necessárias para o componente.
 */
export const useFileUploader = ({
  initialFile = null,
  onFileSelect,
  onView,
  acceptedFileTypes,
  disabled = false,
}: UseFileUploaderProps) => {
  const [file, setFile] = useState<File | null>(initialFile)
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Sincroniza o estado interno com a prop `initialFile`
  useEffect(() => {
    setFile(initialFile)
  }, [initialFile])

  /**
   * Processa o arquivo selecionado, valida o tipo e atualiza o estado.
   */
  const handleFile = useCallback(
    (selectedFile: File | undefined) => {
      if (selectedFile) {
        if (
          acceptedFileTypes &&
          !acceptedFileTypes.split(",").includes(selectedFile.type)
        ) {
          console.warn("Tipo de arquivo não suportado.")
          return
        }
        setFile(selectedFile)
        onFileSelect(selectedFile)
      }
    },
    [acceptedFileTypes, onFileSelect],
  )

  /**
   * Abre programaticamente o diálogo de seleção de arquivo.
   */
  const openFileDialog = useCallback(() => {
    if (disabled) return
    inputRef.current?.click()
  }, [disabled])

  // --- Manipuladores de Eventos ---

  const handleDragOver = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      if (disabled) return
      setIsDragging(true)
    },
    [disabled],
  )

  const handleDragLeave = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      if (disabled) return
      setIsDragging(false)
    },
    [disabled],
  )

  const handleDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      if (disabled) return
      setIsDragging(false)
      handleFile(e.dataTransfer.files?.[0])
    },
    [disabled, handleFile],
  )

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (disabled) return
      handleFile(e.target.files?.[0])
      if (e.target) {
        e.target.value = ""
      }
    },
    [disabled, handleFile],
  )

  const handleRootClick = useCallback(() => {
    if (!file) {
      openFileDialog()
    }
  }, [file, openFileDialog])

  const handleRootKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (!disabled && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault()
        if (!file) openFileDialog()
      }
    },
    [disabled, file, openFileDialog],
  )

  // --- Ações dos Botões ---

  const handleReplace = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      onFileSelect(null)
      openFileDialog()
    },
    [onFileSelect, openFileDialog],
  )

  const handleView = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      if (file && onView) {
        onView(file)
      }
    },
    [file, onView],
  )

  // --- Prop Getters ---

  /**
   * Retorna as props para o elemento raiz (o container 'dropzone').
   */
  const getRootProps = () => ({
    onDragOver: handleDragOver,
    onDragLeave: handleDragLeave,
    onDrop: handleDrop,
    onClick: handleRootClick,
    onKeyDown: handleRootKeyDown,
    role: "button",
    "aria-disabled": disabled,
    tabIndex: disabled ? -1 : 0,
  })

  /**
   * Retorna as props para o elemento input (oculto).
   */
  const getInputProps = () => ({
    type: "file",
    ref: inputRef,
    onChange: handleChange,
    accept: acceptedFileTypes,
    className: "hidden",
    disabled: disabled,
  })

  return {
    file,
    isDragging,
    getRootProps,
    getInputProps,
    handleReplace,
    handleView,
  }
}
