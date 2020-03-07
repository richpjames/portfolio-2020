import React from "react";
import { render } from "@testing-library/react";

import WorkSegment from "./WorkSegment";

describe("WorkSegment", () => {
  it("displays a given header", () => {
    const title = "This is my title";
    const { getByText } = render(
      <WorkSegment title={title}>
        <div></div>
      </WorkSegment>
    );

    expect(getByText(title)).toBeInTheDocument();
  });
  it("displays children correctly", () => {
    const title = "This is my title";
    const child = <p title="description">this is the child</p>;
    const { getByTitle } = render(
      <WorkSegment title={title}>{child}</WorkSegment>
    );

    expect(getByTitle("description"));
  });
});
