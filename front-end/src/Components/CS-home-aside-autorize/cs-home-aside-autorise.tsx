import { FC } from "react";
import { StyledHomeAsideAutorize } from "./cs-home-aside-autorise-styled";
import { Link } from "react-router-dom";

export const HomeAsideAutorize: FC = () => {
  return (
    <StyledHomeAsideAutorize>
      <p className="HomeAsideAutorize-Autorize">authorize to see your corses</p>
      <Link className="HomeAsideAutorize-Autorize-btn" to = {"/singin"}><button>Sign in</button></Link>
      <p className="HomeAsideAutorize-Create">or create account</p>
      <Link className="HomeAsideAutorize-Create-btn" to = {"/singup"}><button>Sign up</button></Link>
    </StyledHomeAsideAutorize>
  );
};
