import styled from "styled-components";

export const StyledInputText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    border: none;
    border-radius: 10px;
    height: 4.5vh;
    width: 25vw;
    margin: 0px 1vw;
    padding: 0px 15px;
    box-sizing: border-box;
    background-color: rgb(239, 235, 206);
  }
  input::placeholder {
    font-style: italic;
  }

  p {
    align-self: flex-start;
    font-size: .8em;
    color: red;
    margin: 0 1.5vw;
  }

  .FormInput {
    margin-top: 2vh;
  }
`;
