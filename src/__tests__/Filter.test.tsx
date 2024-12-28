import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Filter } from "@/components";

const mockHandleOnChange = jest.fn();
const mockOptions = ["Action", "Horror", "Puzzle"];

describe("Filter component", () => {
  
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Should render Filter", () => {
    render(
      <Filter
        options={mockOptions}
        selectedGenre="all"
        handleOnChange={mockHandleOnChange}
      />
    );

    expect(screen.getByText("Genre")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByText("All")).toBeInTheDocument();
  });

  test("Should display selectedGenre value", () => {
    render(
      <Filter
        options={mockOptions}
        selectedGenre="Horror"
        handleOnChange={mockHandleOnChange}
      />
    );

    expect(screen.getByDisplayValue("Horror")).toBeInTheDocument();
  });

  test("Should render all options", () => {
    render(
      <Filter
        options={mockOptions}
        selectedGenre="all"
        handleOnChange={mockHandleOnChange}
      />
    );

    mockOptions.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  test("should trigger handleOnChange when an option is selected", () => {
    render(
      <Filter
        options={mockOptions}
        selectedGenre="all"
        handleOnChange={mockHandleOnChange}
      />
    );

    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "Action" } });

    expect(mockHandleOnChange).toHaveBeenCalledWith("Action");
  });
});
