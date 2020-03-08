import React from "react";
import { Volume, Troubleshoot, Test, Archive, Brush } from "grommet-icons";
import colours from "../../Styles/Colours";

const Skills = () => {
  return (
    <ul>
      <li>
        <Volume color={colours.text} />
        JavaScript, Typescript, Node, Dart
      </li>
      <li>
        <Troubleshoot color={colours.text} />
        React, Flutter, HTML, CSS, Styled Components
      </li>
      <li>
        <Test color={colours.text} /> Jest, Cypress, Chai, Mocha
      </li>
      <li>
        <Archive color={colours.text} />
        Git and Github
      </li>
      <li>
        <Brush color={colours.text} /> Adobe Photoshop and XD
      </li>
    </ul>
  );
};

export default Skills;
