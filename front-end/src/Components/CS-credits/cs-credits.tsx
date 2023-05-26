import { FC } from "react";
import { StyledCredits } from "./cs-credits-styled";
import logo from "../../Images/khai_logo.png";

export const Credits: FC = () => {
  return (
    <StyledCredits>
      <p>Application made by student of</p>
      <img src={logo}></img>
      <p>National Aerospace University «Kharkiv Aviation Institute»</p>
      <p>Kyrychenko Dmytro</p>
      <p>2023</p>
    </StyledCredits>
  );
};
