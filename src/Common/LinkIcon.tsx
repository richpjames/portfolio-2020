import React from "react";
import styled from "styled-components/macro";

const IconLink = styled.a`
  margin-top: 10px;
  :first-child {
    margin-top: 0;
  }
  @media only screen and (max-width: 600px) {
    :first-child {
      margin-top: 10px;
    }
  }
`;

const LinkIcon: React.FC<IconLinkProps> = (props: IconLinkProps) => {
  const { ariaLabel, link, icon } = props;
  return (
    <IconLink aria-label={ariaLabel} href={link}>
      {icon}
    </IconLink>
  );
};

export default LinkIcon;
