import { fireEvent, render, screen } from "@testing-library/react";
// Not working -> import matchers from "@testing-library/jest-dom/matchers";
import * as matchers from "@testing-library/jest-dom/matchers";
import { expect, test } from "vitest";
import { TodoListRemove } from "./TodoListRemove";

expect.extend(matchers);

test("renders Testing component", () => {
  render(<TodoListRemove />);

  const header = screen.getByText("My Todolist with Remove Button");
  expect(header).toBeInTheDocument();
});

test("add todo", () => {
  render(<TodoListRemove />);

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
  console.log(table.innerHTML);
});

test("clear todos", () => {
  render(<TodoListRemove />);

  const desc = screen.getByPlaceholderText("Description");
  fireEvent.change(desc, { target: { value: "Go to coffee" } });
  const date = screen.getByPlaceholderText("Date");
  fireEvent.change(date, { target: { value: "29.12.2023" } });
  const status = screen.getByPlaceholderText("Status");
  fireEvent.change(status, { target: { value: "Open" } });

  const button = screen.getByText("Clear");
  fireEvent.click(button);

  const table = screen.getByRole("table");
  expect(table).not.toHaveTextContent("Go to coffee");
});
