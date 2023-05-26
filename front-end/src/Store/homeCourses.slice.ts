import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { homeCoursesList } from "../Utils/interfaces";

const urlSearch = "http://localhost:3001/course/search?";
const inetialList: homeCoursesList = {
  searchData: { page: 1, querry: null, topic: null },
  coursesList: []
};

const fetchCoursesList = createAsyncThunk("homeCourses/fetchCourses", async(arg, { getState }) => {
  const state: any = getState();
  const result = await fetch(urlSearch + new URLSearchParams({
    page: state.searchData.page// ,
    // querry: state.searchData.querry,
    // topic: state.searchData.topic
  }), {
    method: "GET",
    headers: {
      // "Content-type": "application/json"
    }
  })
    .then(response => {
      return response.json();
    });
  return result;
});

export const homeCoursesSlice = createSlice({
  name: "homeCourses",
  initialState: inetialList, // send request
  reducers: {
    homeSearch: (state, action: PayloadAction<any>) => {
      fetch(urlSearch + new URLSearchParams({
        page: action.payload.page// ,
        // querry: action.payload.querry,
        // topic: action.payload.topic
      }), {
        method: "GET",
        headers: {
          // "Content-type": "application/json"
        }
      })
        .then(response => {
          return response.json();
        })
        .then(result => console.log(result.existingCourse[0]));
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCoursesList.fulfilled, (state, action) => {
        state.coursesList = action.payload;
      });
  }
});

export const { homeSearch } = homeCoursesSlice.actions;

export const selectHomeCourses = (state: RootState) => state.homeCourses;

export default homeCoursesSlice.reducer;
