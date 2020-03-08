import React from "react";
import styled from "styled-components/macro";

import colours from "../../Styles/Colours";

const WorkSegmentWrap = styled.div`
  padding-left: 1.5%;
`;
const Title = styled.h2<{ underlineLength: string }>`
  position: relative;
  margin-bottom: 20px;

  :after {
    content: "";
    width: ${props => props.underlineLength || null};
    position: absolute;
    left: 0;
    bottom: -15px;
    border-width: 0 0 2.5px;
    border-style: solid;
    border-color: ${colours.highlight};
    margin-bottom: 7.5px;
  }
`;

interface IProps {
  title: string;
  underlineLength: string;
  children: JSX.Element;
}
const WorkSegment: React.FC<IProps> = (props: IProps) => {
  const { children, title, underlineLength } = props;
  return (
    <WorkSegmentWrap>
      <Title underlineLength={underlineLength}>{title}</Title>
      {children}
    </WorkSegmentWrap>
  );
};

export default WorkSegment;
