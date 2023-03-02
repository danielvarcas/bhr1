import { Routes, Route } from "react-router-dom"
import { Index } from "./pages/Index"

function App() {
  return (
    <div>
      <h1>File Viewer</h1>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/test" element={<div>Test</div>} />
      </Routes>
    </div>
  )
}

export default App
