import { FC } from "react";
import { Link } from "react-router-dom";
import { StyledHomeLink } from "./cs-home-link-styled";

export const HomeLink: FC = () => {
  return (
    <Link to = {"/"}>
      <StyledHomeLink></StyledHomeLink>
    </Link>
  );
};
