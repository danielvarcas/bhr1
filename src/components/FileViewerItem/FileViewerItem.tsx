import React from "react"
import { Link } from "react-router-dom"
import { File } from "../../types/File"

interface FileViewerItemProps {
  file: File
}

export function FileViewerItem({ file }: FileViewerItemProps) {
  const isFolder = React.useMemo(() => {
    return !!file.files?.length
  }, [file.files])

  return (
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

      {isFolder && <Link to="/test">View contents</Link>}

      <p>{file.type}</p>
      <p>{file.added}</p>
      <p>Is folder: {isFolder ? "Yes" : "No"}</p>
    </li>
  )
}
