import { render } from "@testing-library/react";

import Search from "./Search";
import React from "react";

vi.mock("react-router-dom", async () => {
  return {
    ...vi.importMock("react-router-dom"),
    useHistory: vi.fn(),
    useParams: vi.fn(),
    useLocation: () => ({
      search: "",
      pathname: "/",
    }),
    matchPath: vi.fn(),
    withRouter: vi.fn(),
    useRouteMatch: vi.fn(),
    Link: ({ children, to }: { children: JSX.Element; to: string }) =>
      React.createElement("a", { href: to }, children),
    Router: () => vi.fn(),
    HashRouter: () => vi.fn(),
    Switch: () => vi.fn(),
    useNavigate: vi.fn(),
  };
});

describe("search", () => {
  it("renders headline", () => {
    const { getByText } = render(<Search />);
    expect(getByText("POKEMON NAME OR ID")).toBeDefined();
  });
});
