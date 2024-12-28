import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "@/components";

jest.mock("next/link", () => {
  return ({ children }: { children: React.ReactNode }) => children;
});

describe("Footer Component", () => {
  test("Should render Footer", () => {
    render(<Footer />);

    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(screen.getByTestId("logoAD")).toBeInTheDocument();
  });
});
