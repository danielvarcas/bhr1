import { FileViewer } from "./components/FileViewer/FileViewer"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <h1>File Viewer</h1>
      <Routes>
        <Route path="/" element={<FileViewer />} />
      </Routes>
    </div>
  )
}

export default App
