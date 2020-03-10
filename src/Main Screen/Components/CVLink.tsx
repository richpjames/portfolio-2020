import React from "react";
import styled from "styled-components/macro";
import { DocumentText } from "grommet-icons";
import colours from "../../Styles/Colours";

const CVWrap = styled.div`
  font-size: 21px;
  margin-top: 8vh;
`;

const TextWrap = styled.a`
  margin-right: 10px;
  margin-bottom: 2px;
`;
const CVLink = () => {
  return (
    <CVWrap aria-label="link to cv">
      <TextWrap href="https://richjames.co.uk/cv.pdf">View my full CV</TextWrap>
      <DocumentText color={colours.text} />
    </CVWrap>
  );
};

export default CVLink;
