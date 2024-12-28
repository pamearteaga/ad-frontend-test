import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "@/components";

describe("GameCard Component", () => {
  const buttonMock = {
    label: "Test Button",
    handleClick: jest.fn(),
    widthFull: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Should render Button", () => {
    const { container } = render(<Button label={buttonMock.label} handleClick={buttonMock.handleClick} />);

    expect(screen.getByText("Test Button")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('button')
  });

  test("Should trigger handleClick when Button is clicked", () => {
    render(<Button label={buttonMock.label} handleClick={buttonMock.handleClick} />);

    const button = screen.getByText("Test Button");
    fireEvent.click(button);
    expect(buttonMock.handleClick).toHaveBeenCalled();
  });

  test("Should have class button_full when widthFull is true ", () => {
    const { container } = render(
      <Button
        label={buttonMock.label}
        handleClick={buttonMock.handleClick}
        widthFull
      />
    );

    expect(screen.getByText("Test Button")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('button_full')
  });
});
