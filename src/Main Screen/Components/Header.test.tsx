import React from "react";
import { render } from "@testing-library/react";

import Header from "./Header";

describe("Header", () => {
  it(`displays the text "Richard James"`, () => {
    const { getByText } = render(<Header />);

    expect(getByText("Richard James")).toBeInTheDocument();
  });
  it(`displays the text "Front End Developer"`, () => {
    const { getByText } = render(<Header />);

    expect(getByText("Front End Developer")).toBeInTheDocument();
  });
});
