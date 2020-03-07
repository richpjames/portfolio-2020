import React from "react";
import styled from "styled-components/macro";
import { Github } from "grommet-icons";

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
          <Github />
        </a>
      </LinksWrap>
    </HeaderWrap>
  );
};

export default Header;
