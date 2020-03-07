import React from "react";
import styled from "styled-components/macro";

import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import colours from "../../Styles/Colours";

const WorkWrap = styled.section`
  display: flex;
`;

const WorkSegment = styled.div`
  border-left: 1px solid ${colours.highlight};
  border-right: 1px solid ${colours.highlight};

  overflow-y: scroll;
`;

const WorkSection = () => {
  return (
    <WorkWrap>
      <WorkSegment>
        <Experience />
      </WorkSegment>
      <WorkSegment>
        <Projects />
      </WorkSegment>
      <WorkSegment>
        <Skills />
      </WorkSegment>
    </WorkWrap>
  );
};

export default WorkSection;
