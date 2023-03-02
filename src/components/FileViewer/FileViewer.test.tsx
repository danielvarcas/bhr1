import { render, screen } from "@testing-library/react"
import { FileViewer } from "./FileViewer"

describe("FileViewer", () => {
  it("should display a list of root-level files and folders", () => {
    render(<FileViewer />)

    expect(
      screen.getByRole("listitem", { name: /Employee Handbook/i })
    ).toBeVisible()

    expect(screen.getAllByRole("listitem")).toHaveLength(5)
  })
})
