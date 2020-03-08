import React from "react";
import styled from "styled-components/macro";

import colours from "../../Styles/Colours";

const ExperienceWrap = styled.section`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 600px) {
    width: 95%;
  }
`;

const HeadingWrap = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  :nth-of-type() {
    margin-top: 200px;
  }
`;

const CompanyTitle = styled.h3`
  margin-bottom: 5.5px;
`;
const Date = styled.h4`
  margin-bottom: 8.5px;
`;
const TextBlock = styled.p`
  font-size: 18px;
`;

const Seperator = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  border-width: 0 0 2.5px;
  border-style: solid;
  border-color: ${colours.highlight};
`;

interface IProps {
  title: string;
  date?: string;
  description: JSX.Element;
}

const ExperienceBlock: React.FC<IProps> = (props: IProps) => {
  const { title, description, date } = props;
  return (
    <ExperienceWrap>
      <HeadingWrap>
        <CompanyTitle>{title}</CompanyTitle>
        <Date>{date}</Date>
      </HeadingWrap>
      <TextBlock>{description}</TextBlock>
      <Seperator />
    </ExperienceWrap>
  );
};

export default ExperienceBlock;
