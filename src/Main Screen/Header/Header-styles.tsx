import styled from "styled-components/macro";
import colours from "../../Styles/Colours";

export const HeaderWrap = styled.header`
  display: flex;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1%;
  height: 15vh;
  align-items: center;
  @media only screen and (max-width: 600px) {
    margin-top: 20px;
    flex-direction: column;
  }
  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
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
  @media only screen and (max-width: 600px) {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SubtitleWrap = styled.h4`
  margin-top: 12px;
  text-align: center;
`;
export const DescriptionWrap = styled.div`
  align-self: center;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ExternalLinksWrap = styled.nav`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media only screen and (max-width: 600px) {
    margin-top: 25px;
    margin-left: 0;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
  }
`;

export const InternalLinksWrap = styled.nav`
  font-size: 20.5px;
  display: flex;
  justify-content: space-evenly;
  width: 15%;
  margin-left: 41%;
  margin-right: 15%;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
