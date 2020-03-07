import React from "react";
import styled from "styled-components/macro";
import { Github, Linkedin, Contact } from "grommet-icons";

import colours from "../../Styles/Colours";
import LinkIcon from "./LinkIcon";

const HeaderWrap = styled.header`
  display: flex;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1%;
`;
const NameWrap = styled.h1`
  text-decoration: underline;
  text-decoration-color: ${colours.highlight};
`;

const DescriptionWrap = styled.div``;

const LinksWrap = styled.nav`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const icons: IconLinkProps[] = [
  {
    link: "https://github.com/richpjames/",
    ariaLabel: "Github link",
    icon: <Github color={`${colours.highlight}`} />
  },
  {
    link: "https://richjames.co.uk/contact/",
    ariaLabel: "Contact link",
    icon: <Contact color={`${colours.highlight}`} />
  },
  {
    link: "https://linkedin.com/in/richard-p-james/",
    ariaLabel: "LinkedIn link",
    icon: <Linkedin color={`${colours.highlight}`} />
  }
];

const Header = () => {
  return (
    <HeaderWrap>
      <DescriptionWrap>
        <NameWrap>Richard James</NameWrap>
        <h2>Front End Developer</h2>
      </DescriptionWrap>
      <LinksWrap>
        {icons.map((icon, i) => (
          <LinkIcon
            link={icon.link}
            ariaLabel={icon.ariaLabel}
            icon={icon.icon}
            key={i}
          />
        ))}
      </LinksWrap>
    </HeaderWrap>
  );
};

export default Header;
