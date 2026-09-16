import { render, screen } from "@testing-library/react";
import { FeatureCard } from "../components/FeatureCard";

test("shows title and text", () => {
  render(<FeatureCard title="Context" text="Give Claude knowledge." />);
  expect(screen.getByRole("heading", { name: "Context" })).toBeDefined();
  expect(screen.getByText("Give Claude knowledge.")).toBeDefined();
});
