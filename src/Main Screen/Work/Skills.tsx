import React from "react";
import {
  Troubleshoot,
  Test,
  Archive,
  Brush,
  BlockQuote,
  Group,
  Plan,
  Monitor
} from "grommet-icons";
import styled from "styled-components/macro";

import colours from "../../Styles/Colours";

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 60vh;
  justify-content: space-between;
  padding-top: 10vh;
  padding-bottom: 10vh;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    flex-wrap: nowrap;
    height: 100%;
  }
`;

const Skill = styled.span``;
const SkillTitle = styled.h4`
  margin-top: 10px;
  margin-bottom: 10px;
`;
const SkillsSegment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

const Skills = () => {
  return (
    <SkillsList>
      {skillsData.map(skill => (
        <SkillsSegment>
          {skill.icon}
          <SkillTitle>{skill.title}</SkillTitle>
          <Skill>{skill.items}</Skill>
        </SkillsSegment>
      ))}
    </SkillsList>
  );
};
const skillsData = [
  {
    title: "Languages",
    items: "JavaScript, Typescript, HTML, CSS, Dart",
    icon: <BlockQuote color={colours.text} />
  },
  {
    title: "Frameworks",
    items: "React, Flutter, Node",
    icon: <Troubleshoot color={colours.text} />
  },
  {
    title: "Designing for",
    items: "Accessibility, responsiveness, performance",
    icon: <Monitor color={colours.text} />
  },
  {
    title: "Testing",
    items: "Jest, Cypress, Testing Library, Chai, Mocha",
    icon: <Test color={colours.text} />
  },
  {
    title: "Version Control",
    items: "Git and Github",
    icon: <Archive color={colours.text} />
  },

  {
    title: "Design",
    items: "Adobe Photoshop and XD",
    icon: <Brush color={colours.text} />
  },
  {
    title: "Soft skills",
    items:
      "Working in an agile environment, customer support, documentation, kanban boards",
    icon: <Group color={colours.text} />
  },
  {
    title: "Project skills",
    items: "Architecture, planning, time management, research",
    icon: <Plan color={colours.text} />
  }
];
export default Skills;
