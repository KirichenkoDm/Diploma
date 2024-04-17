import styled from "styled-components";

export const StyledHomeCoursesList = styled.div`
  height: 70vh;
  overflow-y: scroll;
  padding-right: 10px;
  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    border-radius: 10px;
    background-color: rgb(209, 205, 176);
  }

  ::-webkit-scrollbar
  {
    width: 12px;
    background-color: rgb(209, 205, 176);
  }

  ::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.5);
    background-color: rgb(139, 135, 106);
  }
`;
