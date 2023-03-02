import { render, screen } from "@testing-library/react"
import { Files } from "./Files"

describe("Files", () => {
  it("should display a list of root-level files and folders", () => {
    render(<Files />)

    expect(
      screen.getByRole("listitem", { name: /Employee Handbook/i })
    ).toBeVisible()

    expect(screen.getAllByRole("listitem")).toHaveLength(5)
  })
})
