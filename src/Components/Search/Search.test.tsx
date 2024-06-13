import { render } from "@testing-library/react";
import Search from "./Search";

describe("search", () => {
  it("renders headline", () => {
    const { getByText } = render(
      <Search
        search={"pikachu"}
        setSearch={() => {}}
        onSearch={() => {}}
        onShuffle={() => {}}
      />
    );
    expect(getByText("POKEMON NAME OR ID")).toBeDefined();
  });
});
