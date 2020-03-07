import React from "react";
import styled from "styled-components/macro";

import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import WorkSegment from "./WorkSegment";

const WorkWrap = styled.div`
  display: flex;
  width: 85%;
  justify-content: space-evenly;
`;

const WorkSection = () => {
  return (
    <WorkWrap>
      <WorkSegment title="Experience">
        <Experience />
      </WorkSegment>
      <WorkSegment title="Projects">
        <Projects />
      </WorkSegment>
      <WorkSegment title="Skills">
        <Skills />
      </WorkSegment>
    </WorkWrap>
  );
};

export default WorkSection;
