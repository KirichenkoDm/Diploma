import styled from "styled-components";
import navigationButton from "../../Images/arrow_scroll.png";
interface Props {
  direction?: string;
}

export const StyledHomeNavigationButton = styled.div<Props>`
  button {
    background-color: transparent;
    background-image: url(${navigationButton});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    height: 4.5vh;
    width: 3.5vw;
    margin: 10px 1vw;
    box-sizing: border-box;
    font-weight: bold;
    transition: all .05s ease-in-out;
    rotate: ${
  props => props.direction === "1"
    ? "180deg"
    : ""
}
}

  button: hover {
    transform: scale(1.2);
`;
