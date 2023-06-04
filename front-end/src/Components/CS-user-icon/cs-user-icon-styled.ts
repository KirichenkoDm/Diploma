import styled from "styled-components";

interface Props {
  isAutorised: boolean
}

export const StyledUserIcon = styled.div<Props>`
    grid-column:  1/2;
    grid-row: 1/2;
    align-self: center;
    justify-self: center;
    margin: 2vh 5px;
    background-color: ${props => props.isAutorised
    ? "black"
    : "transparent"
} ;
    border-radius: 50%;
    width: 3vw;
    height: 3vw;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 3vw;
      height: 3vw;
    }

    a {
      font-weight: bold;
      text-decoration: none;
      color: white;
    }
`;
