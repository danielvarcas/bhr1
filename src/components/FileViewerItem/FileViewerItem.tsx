import { File } from "../../types/File"

interface FileViewerItemProps {
  file: File
}

export function FileViewerItem({ file }: FileViewerItemProps) {
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

      <p>{file.type}</p>
      <p>{file.added}</p>
      <p>Is folder: {!!file.files?.length ? "Yes" : "No"}</p>
    </li>
  )
}
