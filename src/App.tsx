import React from "react"
import { Index } from "./pages/Index"
import { getFiles } from "./utils/files"
import { File } from "./types/File"

function App() {
  const files: File[] = React.useMemo(() => {
    return getFiles()
  }, [getFiles])

  return (
    <div>
      <h1>File Viewer</h1>

      <Index files={files} />
    </div>
  )
}

export default App
