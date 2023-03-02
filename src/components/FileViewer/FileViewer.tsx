import React from "react"
import { getFiles } from "../../utils/files"
import { File } from "../../types/File"

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
          <li
            key={file.id}
            aria-labelledby={`heading-${file.id}`}
            style={{
              listStyle: "none",
              border: "1px solid black",
              margin: "5px",
              padding: "20px",
            }}
          >
            <h3 id={`heading-${file.id}`}>{file.name}</h3>

            <p>{file.type}</p>
            <p>{file.added}</p>
            <p>Is folder: {!!file.files?.length ? "Yes" : "No"}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
