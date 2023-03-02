import { render, screen } from "@testing-library/react"
import { FileViewerItem } from "./FileViewerItem"
import { File } from "../../types/File"

const file: File = {
  id: "1",
  name: "Employee Handbook",
  type: "pdf",
  added: "2021-01-01",
  files: [],
}

describe("FileViewerItem", () => {
  it("should display a file name", () => {
    render(<FileViewerItem file={file} />)

    expect(screen.getByText(file.name)).toBeVisible()
  })
})
