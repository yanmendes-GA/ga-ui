import type { FileUploaderProps } from "./FileUploader.types"
import { getUploaderStyles } from "./FileUploader.styles"
import { useFileUploader } from "./useFileUploader"
import { Icon } from "@/atoms/Icon"
import { Button } from "@/atoms/Button"

export const FileUploader = ({
  label = "Upload de documento",
  onFileSelect,
  onView,
  acceptedFileTypes,
  initialFile = null,
  disabled = false,
  ...props
}: FileUploaderProps) => {
  // Consome o hook com toda a lógica
  const {
    file,
    isDragging,
    getRootProps,
    getInputProps,
    handleReplace,
    handleView,
  } = useFileUploader({
    initialFile,
    onFileSelect,
    onView,
    acceptedFileTypes,
    disabled,
  })

  // --- Renderização ---

  const renderSelectedFileState = () => (
    <div className="flex flex-col items-center gap-3">
      <span
        className="truncate font-medium text-dark-100"
        title={file!.name}
      >
        {file!.name}
      </span>
      <div className="flex flex-shrink-0 gap-3">
        {onView && (
          <Button
            variant="outline"
            icon="eye"
            onClick={handleView}
            disabled={disabled}
          >
            Visualizar
          </Button>
        )}
        <Button
          variant="outline"
          icon="file-upload"
          onClick={handleReplace}
          disabled={disabled}
        >
          Substituir
        </Button>
      </div>
    </div>
  )

  const renderDropzoneState = () => (
    <>
      <Icon name="file-upload" />
      <span>{label}</span>
    </>
  )

  return (
    <div
      {...props}
      {...getRootProps()}
      className={getUploaderStyles({
        isDragging,
        disabled,
        hasFile: !!file,
      })}
    >
      <input {...getInputProps()} />

      {file ? renderSelectedFileState() : renderDropzoneState()}
    </div>
  )
}
