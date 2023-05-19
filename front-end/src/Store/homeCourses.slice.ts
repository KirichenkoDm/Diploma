import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { homeCoursesList } from "../Utils/interfaces";

const inetialList: homeCoursesList = {
  searchData: { page: 1, querry: null, topic: null },
  coursesList: []
};

export const homeCoursesSlice = createSlice({
  name: "homeCourses",
  initialState: inetialList, // send request
  reducers: {
    homeSearch: (state, action: PayloadAction<any>) => {
      fetch("http://localhost:3001/course/search/", {
        method: "GET", // ???
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(action.payload)
      });
    }
  }
});

export const { homeSearch } = homeCoursesSlice.actions;

export const selectHomeCourses = (state: RootState) => state.homeCourses;

export default homeCoursesSlice.reducer;
