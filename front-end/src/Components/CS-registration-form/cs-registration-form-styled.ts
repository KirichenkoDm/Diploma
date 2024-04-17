import styled from "styled-components";

export const StyledRegistrationForm = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgb(209, 205, 176);
    padding: 10px 10px;
    border-radius: 20px;
    transition: all .5s ease-in-out;
  }

  .RadioInput-Container{
    margin-top: 1.5vw;
    align-self: flex-start;
  }

  .RadioInput {
    margin-top: 5px;
    margin-left: 1vw;
    display: flex;
    flex-direction: row;
  }

  button {
    border: none;
    border-radius: 10px;
    height: 4.5vh;
    width: 15vw;
    margin: 1vh 1vw;
    padding: 0px 15px;
    box-sizing: border-box;
    background-color: rgb(239, 235, 206);
    font-weight: bold;
  }

  label {
    margin-top: 1vh;
  }

  a {    
    font-weight: 500;
    font-size: 1.1em;
    color: black;
  }
`;
