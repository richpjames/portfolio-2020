import React from "react";
import styled from "styled-components/macro";

import colours from "../../Styles/Colours";

const WorkSegmentWrap = styled.div`
  :nth-child(even) {
    border-right: 1px solid ${colours.highlight};
    border-left: 1px solid ${colours.highlight};
  }
  width: 33.3%;
  height: 40vh;
  overflow-y: scroll;
`;
const Title = styled.h3``;

interface IProps {
  title: string;
  children: JSX.Element;
}
const WorkSegment: React.FC<IProps> = (props: IProps) => {
  const { children, title } = props;
  return (
    <WorkSegmentWrap>
      <Title>{title}</Title>
      {children}
    </WorkSegmentWrap>
  );
};

export default WorkSegment;
