import { render, screen } from "@testing-library/react"
import { FileViewerItem } from "./FileViewerItem"
import { File } from "../../types/File"
import { MemoryRouter, Route, Routes } from "react-router-dom"

const file: File = {
  id: "1",
  name: "Employee Handbook",
  type: "pdf",
  added: "2021-01-01",
  files: [],
}

const folder: File = {
  id: "1",
  name: "Employee Handbook",
  type: "pdf",
  added: "2021-01-01",
  files: [
    { id: "2", name: "Employee Handbook", type: "pdf", added: "2021-01-01" },
  ],
}

function setup(component: React.ReactNode) {
  const DOM = (
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={component} />
      </Routes>
    </MemoryRouter>
  )

  return render(DOM)
}

describe("FileViewerItem", () => {
  it("should display a file name", () => {
    setup(<FileViewerItem file={file} />)

    expect(screen.getByText(file.name)).toBeVisible()
  })

  it("should provide a link to the folder contents if it is a folder", () => {
    setup(<FileViewerItem file={folder} />)

    expect(screen.getByRole("link", { name: /view contents/i })).toBeVisible()
  })

  it("should not provide a link to the folder contents if it is not a folder", () => {
    setup(<FileViewerItem file={file} />)

    expect(screen.queryByRole("link", { name: /view contents/i })).toBeNull()
  })
})
