import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const homeCoursesSlice = createSlice({
  name: "homeCourses",
  initialState: "", // send request
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

export const selectCurrentUser = (state: RootState) => state.currentUser;

export default homeCoursesSlice.reducer;
