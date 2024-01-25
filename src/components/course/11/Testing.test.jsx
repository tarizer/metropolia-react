import { fireEvent, render, screen } from "@testing-library/react";
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

test("add todo", () => {
  render(<Testing />);

  const desc = screen.getByPlaceholderText("Description");
  fireEvent.change(desc, { target: { value: "Go to coffee" } });
  const date = screen.getByPlaceholderText("Date");
  fireEvent.change(date, { target: { value: "29.12.2023" } });
  const status = screen.getByPlaceholderText("Status");
  fireEvent.change(status, { target: { value: "Open" } });

  const button = screen.getByText("Add");
  fireEvent.click(button);

  const table = screen.getByRole("table");
  expect(table).toHaveTextContent("Go to coffee");
});

test("renders the form correctly", () => {
  render(<Testing />);
  const descriptionInput = screen.getByPlaceholderText("Description");
  const dateInput = screen.getByPlaceholderText("Date");
  const statusInput = screen.getByPlaceholderText("Status");
  const addButton = screen.getByText("Add");

  expect(descriptionInput).toBeInTheDocument();
  expect(dateInput).toBeInTheDocument();
  expect(statusInput).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});
