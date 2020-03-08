import React from "react";
import styled from "styled-components";

import ExperienceBlock from "./ExperienceBlock";

const ExperienceWrap = styled.section<{ id: string }>`
  margin-top: 3%;
`;

const Experiences = () => {
  return (
    <ExperienceWrap id="work-experience">
      <ExperienceBlock
        title="Software Developer / MyBuzz Technologies"
        date="August 2019 - Present"
        description={
          <>
            <p>
              As part of a small team following agile methodologies I have
              designed, built, tested and managed the production of Flutter and
              React (Javascript and Typescript) apps. Answering directly to the
              MD I have used TDD to build efficient, secure and well designed
              apps often with a stack that, on starting projects, was new to me.
              I coded products from wireframes to create fully interactive and
              useful products using Flutter, React, CSS and HTML.
            </p>
            <br></br>
            <p>
              For part of my time at MyBuzz I worked with other developers
              collaboratively and at other times I solely took ownership of the
              codebases for products I was building and was responsible for
              keeping other stakeholders up to date and delivering the projects
              on time. During my time with MyBuzz I was given a lot of
              independence to find the best solutions to problems, including
              choosing, evaluating and adopting the best tools and techniques to
              use.
            </p>
            <br></br>
            <p>
              Part of my role involved leading customer support operations which
              I really enjoyed as it allowed me to practice explaining technical
              problems to less technically inclined customers and get a clear
              perspective of how our products were being used.
            </p>
            <br></br>
            <p>
              During my time at MyBuzz I have received training in:<br></br> •
              Languages: Javascript, Typescript, Dart <br></br>• Frameworks:
              Flutter, React <br></br>• Libraries: X-State, Jest, Cypress, Reach
              Router, Grommet, Material UI <br></br>• Other Tools used: Asana,
              Freshdesk, Slack
            </p>
          </>
        }
      />
      <ExperienceBlock
        title="Trainee Developer / Northcoders"
        date="April '19 - July '19"
        description={
          <>
            <p>
              I attended the full stack coding bootcamp in Manchester that
              taught a practical, industry-led curriculum. All code was TDD and
              utilised version control (Git) and pair programming throughout.
            </p>
            <br></br>
            <p>
              During the final 2 weeks of the course I worked in a team of 5 to
              deliver an end-to-end application in an agile environment. Our
              team had daily stand ups and used Trello as a kanban board before
              presenting our final product at the end of the course.
            </p>
            <br></br>
            <p>
              During my time at Northcoders I received training and built
              applications using: <br></br>• React <br></br>• HTML <br></br>•
              CSS <br></br>• AWS <br></br>• Node<br></br> • Express <br></br>•
              PostgreSQL <br></br>• Chai <br></br>• Mocha <br></br>• Cypress
              <br></br>• React Native
            </p>
          </>
        }
      />
    </ExperienceWrap>
  );
};

export default Experiences;
