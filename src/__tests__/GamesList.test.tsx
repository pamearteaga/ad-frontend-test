import React from "react";
import { render, screen } from "@testing-library/react";
import { GamesList } from "@/components";

describe("GamesList component", () => {
  const gamesMock = [
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
      price: 20,
      isNew: false,
      description: "",
    },
    {
      id: "3",
      name: "Test Game 3",
      genre: "Horror",
      image: "/test-image.jpg",
      price: 20,
      isNew: false,
      description: "",
    }
  ];

  test("should render GameCard", () => {
    render(<GamesList games={gamesMock} />);
    
    expect(screen.getByTestId("gamesList")).toBeInTheDocument();
    expect(screen.getAllByTestId("gameCard")).toHaveLength(gamesMock.length);
  });

  test("should render Loader when games list is empty", () => {
    render(<GamesList games={[]} />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
