import React from "react";
import { Github, Linkedin, Contact } from "grommet-icons";

import colours from "../../Styles/Colours";
import LinkIcon from "../../Common/LinkIcon";
import {
  HeaderWrap,
  DescriptionWrap,
  NameWrap,
  SubtitleWrap,
  LinksWrap
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
