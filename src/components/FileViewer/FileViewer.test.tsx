import { render, screen } from "@testing-library/react"
import { FileViewer } from "./FileViewer"
import { getFiles } from "../../utils/files"
import { vi } from "vitest"

vi.mock("../FileViewerItem/FileViewerItem")

const files = getFiles()

describe("FileViewer", () => {
  it("should display a list of root-level files", () => {
    render(<FileViewer files={files} setSelectedFile={vi.fn()} />)

    expect(screen.getAllByText(/FileViewerItem Mock/i)).toHaveLength(5)
  })
})
