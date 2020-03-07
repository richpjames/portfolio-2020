import React from "react";
import styled from "styled-components/macro";
import { Github, Linkedin, Contact } from "grommet-icons";

import colours from "../../Styles/Colours";

const HeaderWrap = styled.header`
  display: flex;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1%;
`;
const DescritionWrap = styled.div``;

const LinksWrap = styled.nav`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const IconLink = styled.a`
  margin-top: 10px;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <DescritionWrap>
        <h1>Richard James</h1>
        <h2>Front End Developer</h2>
      </DescritionWrap>
      <LinksWrap>
        <IconLink
          aria-label="Github link"
          href="https://github.com/richpjames/"
        >
          <Github aria-label="Github icon" color={`${colours.text}`} />
        </IconLink>
        <IconLink
          aria-label="LinkedIn link"
          href="https://linkedin.com/in/richard-p-james/"
        >
          <Linkedin aria-label="LinkedIn icon" color={`${colours.text}`} />
        </IconLink>
        <IconLink
          aria-label="Contact link"
          href="https://richjames.co.uk/contact/"
        >
          <Contact color={`${colours.text}`} />
        </IconLink>
      </LinksWrap>
    </HeaderWrap>
  );
};

export default Header;
