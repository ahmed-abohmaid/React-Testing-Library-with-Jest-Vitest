import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("Button click flow", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  expect(buttonElement).toHaveClass("red");

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent(/red/i);
  expect(buttonElement).toHaveClass("blue");
});

test("Button disabled flow", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", { name: /disable/i });

  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toBeEnabled();

  fireEvent.click(checkboxElement);
  expect(checkboxElement).toBeChecked();
  expect(checkboxElement).toHaveAccessibleName(/enable/i); // For the label text
  expect(buttonElement).toBeDisabled();
});
