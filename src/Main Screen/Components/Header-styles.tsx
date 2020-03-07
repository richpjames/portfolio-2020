import styled from "styled-components/macro";
import colours from "../../Styles/Colours";

export const HeaderWrap = styled.header`
  display: flex;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1%;
`;

export const NameWrap = styled.h1`
  position: relative;
  :after {
    content: "";
    width: 90%;
    position: absolute;
    left: 5%;
    bottom: -9px;
    border-width: 0 0 2.5px;
    border-style: solid;
    border-color: ${colours.highlight};
  }
`;

export const SubtitleWrap = styled.h3`
  margin-top: 12px;
  text-align: center;
`;
export const DescriptionWrap = styled.div`
  align-self: center;
`;

export const LinksWrap = styled.nav`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-self: center;
`;
