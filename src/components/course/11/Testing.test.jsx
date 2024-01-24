import { render, screen } from "@testing-library/react";
// Not working -> import matchers from "@testing-library/jest-dom/matchers";
import * as matchers from "@testing-library/jest-dom/matchers";
import { expect, test } from "vitest";
import { Testing } from "./Testing";

expect.extend(matchers);

test("renders Testing component", () => {
  render(<Testing />);
  const header = screen.getByText("My Todolist");
  expect(header).toBeInTheDocument();
});
