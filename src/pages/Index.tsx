import React from "react"
import { FileViewer } from "../components/FileViewer/FileViewer"
import { getFiles } from "../utils/files"
import { File } from "../types/File"

interface IndexProps {
  files: File[]
}

export function Index({ files }: IndexProps) {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null)

  const filesBeingViewed = React.useMemo(() => {
    return selectedFile?.files || files
  }, [selectedFile])

  return (
    <>
      <h2>File Viewer</h2>

      <FileViewer files={filesBeingViewed} setSelectedFile={setSelectedFile} />
    </>
  )
}
