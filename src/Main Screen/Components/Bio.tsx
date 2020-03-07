import React from "react";
import styled from "styled-components/macro";

const BioWrap = styled.section`
  height: 200px;
  width: 50%;
  margin-top: 5%;
  text-align: center;
`;

const Bio = () => {
  return (
    <BioWrap title="bio">
      <p>
        I’m a fast-learner who is passionate about designing and developing
        beautiful user interfaces that stimulate memorable interactions, tell
        stories and make products come to life. I love leveraging tech to create
        elegant solutions to difficult problems.
      </p>
    </BioWrap>
  );
};

export default Bio;
