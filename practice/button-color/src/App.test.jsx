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
