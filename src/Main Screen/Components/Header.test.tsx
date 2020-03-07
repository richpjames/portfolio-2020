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
  it(`Github icon has link to the correct page`, () => {
    const { getByLabelText } = render(<Header />);

    const iconComponent = getByLabelText("Github link");
    expect(iconComponent).toHaveProperty("href");
    expect(iconComponent).toContainHTML("https://github.com/richpjames/");
  });
  it(`LinkedIn icon has link to the correct page`, () => {
    const { getByLabelText } = render(<Header />);

    const iconComponent = getByLabelText("LinkedIn link");
    expect(iconComponent).toHaveProperty("href");
    expect(iconComponent).toContainHTML(
      "https://linkedin.com/in/richard-p-james"
    );
  });
});
