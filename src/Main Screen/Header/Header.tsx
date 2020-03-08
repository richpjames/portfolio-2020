import React from "react";
import { Github, Linkedin, Contact } from "grommet-icons";

import colours from "../../Styles/Colours";
import LinkIcon from "../../Common/LinkIcon";
import {
  HeaderWrap,
  DescriptionWrap,
  NameWrap,
  SubtitleWrap,
  ExternalLinksWrap,
  InternalLinksWrap
} from "./Header-styles";

interface IProps {
  title?: string;
}

const Header: React.FC<IProps> = (props: IProps) => {
  const { title } = props;
  return (
    <HeaderWrap title={title}>
      <DescriptionWrap>
        <NameWrap>Richard James</NameWrap>
        <SubtitleWrap>Front End Developer</SubtitleWrap>
      </DescriptionWrap>
      <InternalLinksWrap>
        <a href="#skills">Skills</a>
        <a href="#work-experience">Work</a>
      </InternalLinksWrap>
      <ExternalLinksWrap>
        {icons.map((icon, i) => (
          <LinkIcon
            link={icon.link}
            ariaLabel={icon.ariaLabel}
            icon={icon.icon}
            key={i}
          />
        ))}
      </ExternalLinksWrap>
    </HeaderWrap>
  );
};

export default Header;

const icons: IconLinkProps[] = [
  {
    link: "https://github.com/richpjames/",
    ariaLabel: "Github link",
    icon: <Github color={`${colours.highlight}`} />
  },
  {
    link: "https://linkedin.com/in/richard-p-james/",
    ariaLabel: "LinkedIn link",
    icon: <Linkedin color={`${colours.highlight}`} />
  },
  {
    link: "mailto:rich@richjames.co.uk",
    ariaLabel: "Contact link",
    icon: <Contact color={`${colours.highlight}`} />
  }
];
