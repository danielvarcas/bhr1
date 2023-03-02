import React from "react"
import { FileViewer } from "../components/FileViewer/FileViewer"
import { getFiles } from "../utils/files"
import { File } from "../types/File"

export function Index() {
  const files: File[] = React.useMemo(() => {
    return getFiles()
  }, [getFiles])

  return (
    <>
      <h2>File Viewer</h2>

      <FileViewer files={files} />
    </>
  )
}
