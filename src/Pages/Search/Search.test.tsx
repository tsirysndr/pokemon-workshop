import { render, screen } from "@testing-library/react";

import Search from "./Search";

describe("search", () => {
  it("renders headline", () => {
    render(<Search />);

    screen.debug();

    // check if App components renders headline
  });
});
