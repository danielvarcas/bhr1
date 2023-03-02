import React from "react"
import { File } from "../../types/File"
import { FileViewerItem } from "../FileViewerItem/FileViewerItem"

interface FileViewerProps {
  files: File[]
}

export function FileViewer({ files }: FileViewerProps) {
  return (
    <div>
      <ul>
        {files.map((file) => (
          <FileViewerItem key={file.id} file={file} />
        ))}
      </ul>
    </div>
  )
}
