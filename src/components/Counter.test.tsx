import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";

describe("Counter Component", () => {
  it("renders with initial count of 0", () => {
    render(<Counter />);
    const countValue = screen.getByTestId("count-value");
    expect(countValue).toHaveTextContent("0");
  });

  it("increments count when increment button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId("increment-button");
    const countValue = screen.getByTestId("count-value");

    fireEvent.click(incrementButton);
    expect(countValue).toHaveTextContent("1");

    fireEvent.click(incrementButton);
    expect(countValue).toHaveTextContent("2");
  });

  it("decrements count when decrement button is clicked", () => {
    render(<Counter />);
    const decrementButton = screen.getByTestId("decrement-button");
    const countValue = screen.getByTestId("count-value");

    fireEvent.click(decrementButton);
    expect(countValue).toHaveTextContent("-1");
  });
});
