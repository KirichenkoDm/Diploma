import { FC } from "react";
import { Link } from "react-router-dom";
import { StyledHomeLink } from "./cs-home-link-styled";

const blockStyle = { display: "inline-block" };

export const HomeLink: FC = () => {
  return (
    <Link style={blockStyle} to = {"/"}>
      <StyledHomeLink></StyledHomeLink>
    </Link>
  );
};
