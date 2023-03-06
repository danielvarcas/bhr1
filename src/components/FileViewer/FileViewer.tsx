import React from "react"
import { File } from "../../types/File"
import { FileViewerItem } from "../FileViewerItem/FileViewerItem"

interface FileViewerProps {
  files: File[]
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>
}

export function FileViewer({ files, setSelectedFile }: FileViewerProps) {
  function clearSelectedFile() {
    setSelectedFile(null)
  }

  return (
    <div>
      <button onClick={clearSelectedFile}>Clear selection</button>

      <ul>
        {files.map((file) => (
          <FileViewerItem
            key={file.id}
            file={file}
            setSelectedFile={setSelectedFile}
          />
        ))}
      </ul>
    </div>
  )
}
