import { render, screen } from "@testing-library/react";
import { Hero } from "../components/Hero";

test("shows the headline", () => {
  render(<Hero />);
  expect(screen.getByRole("heading", { name: "Teach Claude" })).toBeDefined();
});
