import React from "react";
import styled from "styled-components/macro";
import { Github, Linkedin, Contact } from "grommet-icons";

import colours from "../../Styles/Colours";
import LinkIcon from "../../Common/LinkIcon";

const HeaderWrap = styled.header`
  display: flex;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1%;
`;

const NameWrap = styled.h1`
  position: relative;
  :after {
    content: "";
    width: 90%;
    position: absolute;
    left: 5%;
    bottom: -8.5px;
    border-width: 0 0 2.5px;
    border-style: solid;
    border-color: ${colours.highlight};
  }
`;

const FEDWrap = styled.h3`
  margin-top: 10px;
  text-align: center;
`;
const DescriptionWrap = styled.div`
  align-self: center;
`;

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
        <FEDWrap>Front End Developer</FEDWrap>
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
