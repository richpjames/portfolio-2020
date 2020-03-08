import React from "react";
import styled from "styled-components/macro";

import Experiences from "./Experiences";
import Projects from "./Projects";
import Skills from "./Skills";
import WorkSegment from "./WorkSegment";

const WorkWrap = styled.section`
  display: flex;
  flex-direction: column;
  width: 85%;
  justify-content: space-evenly;
`;

const CVSection = () => {
  return (
    <WorkWrap>
      <WorkSegment title="Skills" underlineLength="55px">
        <Skills />
      </WorkSegment>
      <WorkSegment title="Experience" underlineLength="125px">
        <Experiences />
      </WorkSegment>
      <WorkSegment title="Projects" underlineLength="110px">
        <Projects />
      </WorkSegment>
    </WorkWrap>
  );
};

export default CVSection;
