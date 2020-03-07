import React from "react";
import { render } from "@testing-library/react";

import LinkIcon from "./LinkIcon";
import { Github } from "grommet-icons";

describe("LinkIcon", () => {
  it("links to the correct page", () => {
    const labelText = "Github link";
    const link = `https://github.com/richpjames/`;
    const { getByLabelText } = render(
      <LinkIcon ariaLabel={labelText} link={link} icon={<Github />} />
    );

    const iconComponent = getByLabelText("Github link");
    expect(iconComponent).toHaveProperty("href");
    expect(iconComponent).toContainHTML("https://github.com/richpjames/");
  });
});
