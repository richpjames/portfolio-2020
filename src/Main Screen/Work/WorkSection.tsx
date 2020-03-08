import React from "react";
import styled from "styled-components/macro";

import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import WorkSegment from "./WorkSegment";

const WorkWrap = styled.section`
  display: flex;
  flex-direction: column;
  width: 85%;
  justify-content: space-evenly;
`;

const WorkSection = () => {
  return (
    <WorkWrap>
      <WorkSegment title="Skills" underlineLength="75px">
        <Skills />
      </WorkSegment>
      <WorkSegment title="Experience" underlineLength="150px">
        <Experience />
      </WorkSegment>
      <WorkSegment title="Projects" underlineLength="110px">
        <Projects />
      </WorkSegment>
    </WorkWrap>
  );
};

export default WorkSection;
