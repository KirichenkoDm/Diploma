import styled from "styled-components";

export const StyledHomeMain = styled.div`
  display: flex;
  justify-content: center;
  .Home-Navigation {
    display: flex;
    flex-direction: row;
    align-self: end;
    align-items: center;
  }
  .Home-Navigation p {
    margin: 0px 15px;
    font-weight: bold;
    font-size: 1.5em;
  }

  main {
    flex-direction: column;
    width: 90%;
    display: flex;
  }
`;
