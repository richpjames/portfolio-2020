import React from "react";
import styled from "styled-components/macro";
import { DocumentText } from "grommet-icons";

import CVLink from "./CVLink";

const BioWrap = styled.section`
  height: 85vh;
  width: 80%;
  margin-top: 23vh;
  margin-right: auto;
  margin-left: 7.5%;
  text-align: left;
  @media only screen and (max-width: 600px) {
    margin-top: 25%;
  }
`;
const SecondSection = styled.p`
  margin-top: 2%;
  margin-bottom: 1.5%;
`;

const Bio = () => {
  return (
    <BioWrap title="bio">
      <p>
        I have a passion for designing and developing beautiful user interfaces
        that
        <br></br>
        stimulate memorable interactions, tell stories and make products come to
        life.
      </p>
      <SecondSection>
        I love to create elegant solutions to difficult problems
      </SecondSection>
      <CVLink />
      <DocumentText />
    </BioWrap>
  );
};

export default Bio;
