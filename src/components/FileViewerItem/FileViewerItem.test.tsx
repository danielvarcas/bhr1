import { render, screen } from "@testing-library/react"
import { FileViewerItem } from "./FileViewerItem"
import { File } from "../../types/File"
import { vi } from "vitest"

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

describe("FileViewerItem", () => {
  it("should display a file name", () => {
    render(<FileViewerItem file={file} setSelectedFile={vi.fn()} />)

    expect(screen.getByText(file.name)).toBeVisible()
  })

  it("should provide a button to view folder contents if it is a folder", () => {
    render(<FileViewerItem file={folder} setSelectedFile={vi.fn()} />)

    expect(screen.getByRole("button", { name: /view contents/i })).toBeVisible()
  })

  it("should not provide a button to view folder contents if it is not a folder", () => {
    render(<FileViewerItem file={file} setSelectedFile={vi.fn()} />)

    expect(screen.queryByRole("button", { name: /view contents/i })).toBeNull()
  })

  it("should update the selected file when the view contents button is clicked", () => {
    const setSelectedFile = vi.fn()

    render(<FileViewerItem file={folder} setSelectedFile={setSelectedFile} />)
    screen.getByRole("button", { name: /view contents/i }).click()

    expect(setSelectedFile).toHaveBeenCalledWith(folder)
  })
})
