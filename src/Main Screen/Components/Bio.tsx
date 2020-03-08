import React from "react";
import styled from "styled-components/macro";
import CVLink from "./CVLink";

const BioWrap = styled.section`
  height: 85vh;
  width: 50%;
  margin-top: 23vh;
  text-align: center;
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
        I’m all about designing and developing beautiful user interfaces that
        stimulate memorable interactions, tell stories and make products come to
        life.
      </p>
      <SecondSection>
        I love to create elegant solutions to difficult problems
      </SecondSection>
      <CVLink />
    </BioWrap>
  );
};

export default Bio;
