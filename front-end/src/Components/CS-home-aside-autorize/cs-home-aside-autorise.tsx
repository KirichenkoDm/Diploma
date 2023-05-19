import { FC } from "react";
import { StyledHomeAsideAutorize } from "./cs-home-aside-autorise-styled";

export const HomeAsideAutorize: FC = () => {
  return (
    <StyledHomeAsideAutorize>
      <p>authorize to see your corses</p>
      <button>sign in</button>
      <p>or create account</p>
      <button>sign up</button>
    </StyledHomeAsideAutorize>
  );
};
