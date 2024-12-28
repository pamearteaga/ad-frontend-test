import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ItemShop } from "@/components";


describe("ItemShop component", () => {
  const removeItemMock = jest.fn();
  const itemMock = {
    id: "3",
    name: "Test Item",
    genre: "Puzzle",
    image: "/test-image.jpg",
    price: 59.99,
    isNew: true,
    description: "Item description",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Should render ItemShop", () => {
    render(<ItemShop item={itemMock} removeItem={removeItemMock} />);

    expect(screen.getByText("Puzzle")).toBeInTheDocument();
    expect(screen.getByText("Test Item")).toBeInTheDocument();
    expect(screen.getByText("Item description")).toBeInTheDocument();
    expect(screen.getByText("$59.99")).toBeInTheDocument();
    expect(screen.getByText("New")).toBeInTheDocument();
    expect(screen.getByAltText("Test Item")).toBeInTheDocument();
  });

  test("Should display remove icon", () => {
    render(<ItemShop item={itemMock} removeItem={removeItemMock} />);

    expect(screen.getByTestId("removeIcon")).toBeInTheDocument();
  });

  test("Should call removeItem with item id when remove icon is clicked", () => {
    render(<ItemShop item={itemMock} removeItem={removeItemMock} />);

    const removeIcon = screen.getByTestId("removeIcon");
    fireEvent.click(removeIcon);

    expect(removeItemMock).toHaveBeenCalledWith("3");
  });

  test("Should not display 'New' tag if isNew is false", () => {
    render(<ItemShop item={{ ...itemMock, isNew: false }} removeItem={removeItemMock} />);

    expect(screen.queryByText("New")).not.toBeInTheDocument();
  });
});