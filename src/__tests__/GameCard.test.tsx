import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useStore } from "../store/useStore";
import { GameCard } from "@/components";

jest.mock("../store/useStore", () => ({
  useStore: jest.fn(),
}));

const mockSetCart = jest.fn();

describe("GameCard Component", () => {
  const gameMock = {
    id: "1",
    name: "Test Game",
    genre: "Action",
    image: "/test-image.jpg",
    price: 20,
    isNew: true,
    description: "",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Should render the game details", () => {
    (useStore as unknown as jest.Mock).mockReturnValue({
      cart: [],
      setCart: mockSetCart,
    });

    render(<GameCard game={gameMock} />);

    expect(screen.getByText("Test Game")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("$20")).toBeInTheDocument();
    expect(screen.getByText("New")).toBeInTheDocument();
    expect(screen.getByAltText("Test Game")).toBeInTheDocument();
    expect(screen.getByText("ADD TO CART")).toBeInTheDocument();
  });

  test("Should display 'REMOVE' when the game is in the cart", () => {
    (useStore as unknown as jest.Mock).mockReturnValue({
      cart: [gameMock],
      setCart: mockSetCart,
    });

    render(<GameCard game={gameMock} />);

    expect(screen.getByText("REMOVE")).toBeInTheDocument();
  });

  test("Should call setCart with the game added when not in the cart", () => {
    (useStore as unknown as jest.Mock).mockReturnValue({
      cart: [],
      setCart: mockSetCart,
    });

    render(<GameCard game={gameMock} />);

    const button = screen.getByText("ADD TO CART");
    fireEvent.click(button);

    expect(mockSetCart).toHaveBeenCalledWith([gameMock]);
  });

  test("Should call setCart with the game removed when already in the cart", () => {
    (useStore as unknown as jest.Mock).mockReturnValue({
      cart: [gameMock],
      setCart: mockSetCart,
    });

    render(<GameCard game={gameMock} />);

    const button = screen.getByText("REMOVE");
    fireEvent.click(button);

    expect(mockSetCart).toHaveBeenCalledWith([]);
  });

  test("Should not display 'New' tag if isNew is false", () => {
      render(<GameCard game={{...gameMock, isNew: false}}/>);
  
      expect(screen.queryByText("New")).not.toBeInTheDocument();
    });
});
