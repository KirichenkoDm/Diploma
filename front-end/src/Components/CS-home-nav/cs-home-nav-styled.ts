import styled from "styled-components";

export const StyledHomeNav = styled.div`
  background-color: rgb(209, 205, 176);
  width: 100%;
  height: 10vh;
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  form {
    display: flex;
  }
  select {
    border: none;
    border-radius: 10px;
    height: 4.5vh;
    width: 9vw;
    margin: 0px 1vw;
    padding: 0px 15px;
    box-sizing: border-box;
    background-color: rgb(239, 235, 206);
    font-weight: bold;
  }
  button {
    border: none;
    border-radius: 10px;
    height: 4.5vh;
    width: 9vw;
    margin: 0px 1vw;
    padding: 0px 15px;
    box-sizing: border-box;
    background-color: rgb(239, 235, 206);
    font-weight: bold;
  }
`;
