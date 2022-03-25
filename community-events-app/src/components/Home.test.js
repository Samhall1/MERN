import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home component", () => {
  it("renders map on screen", () => {
    render(<Home />);

    const map = screen.getByTestId("map");
    expect(map).toBeInTheDocument();
  });
});
