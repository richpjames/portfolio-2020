import React from "react";
import styled from "styled-components";

const CVWrap = styled.div`
  font-size: 21px;
  margin-top: 8vh;
`;

const CVLink = () => {
  return (
    <CVWrap aria-label="link to cv">
      <a href="https://richjames.co.uk/cv.pdf">View my full CV</a>
    </CVWrap>
  );
};

export default CVLink;
