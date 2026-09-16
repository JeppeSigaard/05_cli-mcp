import { render, screen } from "@testing-library/react";
import { Footer } from "../components/Footer";

test("shows the footer line", () => {
  render(<Footer />);
  expect(screen.getByText("Built live in the Claude Code course.")).toBeDefined();
});
