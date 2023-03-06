import React from "react"
import { File } from "../../types/File"

interface FileViewerItemProps {
  file: File
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>
}

export function FileViewerItem({ file, setSelectedFile }: FileViewerItemProps) {
  const isFolder = React.useMemo(() => {
    return !!file.files?.length
  }, [file.files])

  function onClickViewFile() {
    setSelectedFile(file)
  }

  return (
    <li
      aria-labelledby={`heading-${file.id}`}
      style={{
        listStyle: "none",
        border: "1px solid black",
        margin: "5px",
        padding: "20px",
      }}
    >
      <h3 id={`heading-${file.id}`}>{file.name}</h3>

      {isFolder && <button onClick={onClickViewFile}>View contents</button>}

      <p>{file.type}</p>
      <p>{file.added}</p>
      <p>Is folder: {isFolder ? "Yes" : "No"}</p>
    </li>
  )
}
