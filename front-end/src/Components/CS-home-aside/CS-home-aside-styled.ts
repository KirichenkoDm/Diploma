import styled from "styled-components";

interface Props {
 asideOpened?: boolean;
 isAutorised?: boolean;
}

export const StyledHomeAside = styled.div<Props>`
  top: 0;
  right: 0;
  height: 100vh;
  position: absolute;
  background-color: rgb(199, 195, 166);
  overflow: hidden;
  padding-left: 5px;
  .HomeAside-Open-Close {
    background-color: transparent;
    color: black;
    font-style: bold;
    font-size: 2em;
    border: none;
    grid-column:  1/2;
    grid-row: ${props => props.isAutorised
    ? "3/4"
    : "2/3"
};
    margin: 40vh 0;
  }

  img {
    width: 2vw;
    height: 2vw;
  }

  aside {
    height: 100%;
    display: ${props => props.asideOpened
    ? "grid"
    : "flex"
};
    grid-template-rows: 1fr,1fr;
    grid-template-columns: 1fr,6fr;
    flex-direction: column;
  }

  .HomeAsideOpened-Logout {
    grid-column:  1/2;
    grid-row: 2/3;
    align-self: center;
    justify-self: center;
  }

  .HomeAsideOpened-NameSurname {
    grid-column:  2/3;
    grid-row: 1/2;
    align-self: center;
    justify-self: center;
  }

  .HomeAsideOpened-Role {
    grid-column:  2/3;
    grid-row: 2/3 ;
    align-self: center;
    justify-self: center;
  } 
`;
