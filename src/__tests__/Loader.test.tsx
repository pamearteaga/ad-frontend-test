import React from "react";
import { render, screen } from "@testing-library/react";
import { Loader } from "@/components";

describe("Loader Component", () => {
  test("Should render Loader", () => {
    render(<Loader />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
