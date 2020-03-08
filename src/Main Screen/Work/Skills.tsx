import React from "react";
import { Troubleshoot, Test, Archive, Brush, BlockQuote } from "grommet-icons";
import styled from "styled-components/macro";

import colours from "../../Styles/Colours";

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Skill = styled.span`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const SkillsSegment = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  width: 25%;
`;

const Skills = () => {
  return (
    <SkillsList>
      <SkillsSegment>
        <BlockQuote color={colours.text} />

        <h3>Languages</h3>
        <Skill>JavaScript, Typescript, Dart</Skill>
      </SkillsSegment>
      <SkillsSegment>
        <Troubleshoot color={colours.text} />

        <h3>Frameworks</h3>
        <Skill>React, Flutter, Node, HTML, CSS</Skill>
      </SkillsSegment>
      <SkillsSegment>
        <Test color={colours.text} />

        <h3>Testing</h3>
        <Skill>Jest, Cypress, Testing Library, Chai, Mocha</Skill>
      </SkillsSegment>
      <SkillsSegment>
        <Archive color={colours.text} />

        <h3>Version Control</h3>
        <Skill>Git and Github</Skill>
      </SkillsSegment>
      <SkillsSegment>
        <Brush color={colours.text} />

        <h3>Design</h3>
        <Skill>Adobe Photoshop and XD</Skill>
      </SkillsSegment>
    </SkillsList>
  );
};

export default Skills;
