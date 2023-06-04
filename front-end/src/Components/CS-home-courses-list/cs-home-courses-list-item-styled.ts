import styled from "styled-components";

export const StyledHomeCoursesListItem = styled.div`
  display: grid;
  grid-template-rows: 5fr,1fr;
  grid-template-columns: repeat(2,1fr);
  border: solid 2px black;
  border-radius: 15px;
  margin: 15px 0px;
  padding: 10px 10px;
  box-sizing: border-box;

  a {
    display: grid;
    grid-template-rows: repeat(2,1fr);
    grid-template-columns: repeat(4,1fr);
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 2;

    text-decoration: none;
    color: black;
  }

  .HomeCoursesListItem-TopicIcon {
    width: 7.5vw;
    height: 7.5vw;
    
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .HomeCoursesListItem-Name {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .HomeCoursesListItem-Topic {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .HomeCoursesListItem-Description {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .HomeCoursesListItem-AddIcon {
    align-self: center;
    grid-column-start: 6;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 2;

    width: 7.5vw;
    height: 7.5vw;
  }
`;
