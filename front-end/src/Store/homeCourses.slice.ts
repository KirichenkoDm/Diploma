import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { coursesListItem, homeCoursesList } from "../Utils/interfaces";
import { SearchFormData } from "../Utils/formDataTypes";
import { FetchStatus } from "../Utils/enums";

const urlSearch = "http://localhost:3001/course/search?";
const inetialList: homeCoursesList = {
  fetchStatus: FetchStatus.idle,
  error: null,
  searchData: { page: 1, searchQuery: null, topic: "Topic" },
  coursesList: []
};

export const fetchCoursesList = createAsyncThunk("homeCourses/fetchCoursesList", async(arg, { getState }) => {
  try {
    const state: any = getState();
    const searchParams = new URLSearchParams();
    searchParams.append("page", state.homeCourses.searchData.page.toString());
    searchParams.append("searchQuery", state.homeCourses.searchData.searchQuery || "");
    searchParams.append(
      "topic",
      state.homeCourses.searchData.topic === "Topic"
        ? ""
        : state.homeCourses.searchData.topic);
    const response = await fetch(urlSearch + searchParams,
      {
        method: "GET",
        headers: {
        // "Content-type": "application/json"
        }
      });
    const result = await response.json();
    console.log(result);
    if (result.error) {
      console.log(result.error);
      return [];
    } else {
      return result.existingCourse as coursesListItem[];
    }
  } catch (err) {
    console.log(err);
  }
});

export const homeCoursesSlice = createSlice({
  name: "homeCourses",
  initialState: inetialList, // send request
  reducers: {
    homeSearch: (state, action: PayloadAction<SearchFormData>) => {
      return {
        ...state,
        searchData: action.payload
      };
      // state = { ...state, ...action.payload };
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCoursesList.pending, (state) => {
        state.fetchStatus = FetchStatus.loading;
      })
      .addCase(fetchCoursesList.fulfilled, (state, action: PayloadAction<any>) => {
        return {
          ...state,
          coursesList: [...action.payload],
          fetchStatus: FetchStatus.succeeded
        };
      })
      .addCase(fetchCoursesList.rejected, () => {
        console.log("here");
      });
  }
});

export const { homeSearch } = homeCoursesSlice.actions;

export const selectHomeCourses = (state: RootState) => state.homeCourses;

export default homeCoursesSlice.reducer;
