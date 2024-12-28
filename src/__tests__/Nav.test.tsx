import React from "react";
import { render, screen } from "@testing-library/react";
import { useStore } from "../store/useStore";
import { Nav } from "@/components";

jest.mock("../store/useStore", () => ({
  useStore: jest.fn(),
}));

jest.mock("next/link", () => {
  return ({ children }: { children: React.ReactNode }) => children;
});

describe("GameCard Component", () => {
  const gameMock = {
    id: "1",
    name: "",
    genre: "",
    image: "",
    price: 20,
    isNew: true,
    description: "",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should render Nav", () => {
    (useStore as unknown as jest.Mock).mockReturnValue({
      cart: [],
    });

    render(<Nav />);

    expect(screen.getByText("GamerShop")).toBeInTheDocument();
    expect(screen.getByTestId("cartIcon")).toBeInTheDocument();
    expect(screen.queryByText("1")).not.toBeInTheDocument();
  });

  it("Should render number of items in the cart", () => {
    (useStore as unknown as jest.Mock).mockReturnValue({
      cart: [gameMock],
    });

    render(<Nav />);

    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
