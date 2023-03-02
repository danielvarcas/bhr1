import React from "react"
import { getFiles } from "../../utils/files"
import { File } from "../../types/File"
import { FileViewerItem } from "../FileViewerItem/FileViewerItem"

export function FileViewer() {
  const files: File[] = React.useMemo(() => {
    return getFiles()
  }, [getFiles])

  React.useEffect(() => {
    console.log(files)
  }, [files])

  return (
    <div>
      <h2>File Viewer</h2>

      <ul>
        {files.map((file) => (
          <FileViewerItem file={file} />
        ))}
      </ul>
    </div>
  )
}
