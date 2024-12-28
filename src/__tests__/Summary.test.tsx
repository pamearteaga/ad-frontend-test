import React from "react";
import { render, screen } from "@testing-library/react";
import { Summary } from "@/components";
import { sumPrices } from "../utils";

jest.mock("../utils", () => ({
  sumPrices: jest.fn(),
}));

describe("Summary component", () => {
  const itemsMock = [
    {
      id: "1",
      name: "Test Game",
      genre: "Action",
      image: "/test-image.jpg",
      price: 20,
      isNew: true,
      description: "",
    },
    {
      id: "2",
      name: "Test Game 2",
      genre: "Horror",
      image: "/test-image.jpg",
      price: 25,
      isNew: false,
      description: "",
    },
  ];

  beforeEach(() => {
    (sumPrices as jest.Mock).mockReturnValue(45);
  });

  test("Should render items", () => {
    render(<Summary items={itemsMock} />);

    itemsMock.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(`$${item.price}`)).toBeInTheDocument();
    });
  });

  test("Should display the total price", () => {
    render(<Summary items={itemsMock} />);

    expect(screen.getByText("Order Total")).toBeInTheDocument();
    expect(screen.getByText("$45")).toBeInTheDocument();
  });

  test("Should render the checkout button", () => {
    render(<Summary items={itemsMock} />);

    expect(screen.getByText("Checkout")).toBeInTheDocument();
  });

  test("Should render number of items", () => {
    render(<Summary items={itemsMock} />);

    expect(screen.getByText(`${itemsMock.length} Items`)).toBeInTheDocument();
  });
});
