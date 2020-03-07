import React from "react";
import styled from "styled-components/macro";
import { Github, Linkedin, Contact } from "grommet-icons";

const HeaderWrap = styled.header``;

const LinksWrap = styled.nav``;

const Header = () => {
  return (
    <HeaderWrap>
      <h1>Richard James</h1>
      <h2>Front End Developer</h2>
      <LinksWrap>
        <a
          aria-label="Github link"
          href="https://github.com/richpjames/"
          color="#000000"
        >
          <Github aria-label="Github icon" />
        </a>
        <a
          aria-label="LinkedIn link"
          href="https://linkedin.com/in/richard-p-james/"
          color="#000000"
        >
          <Linkedin aria-label="LinkedIn icon" />
        </a>
        <a
          aria-label="Contact link"
          href="https://richjames.co.uk/contact/"
          color="#000000"
        >
          <Contact />
        </a>
      </LinksWrap>
    </HeaderWrap>
  );
};

export default Header;
