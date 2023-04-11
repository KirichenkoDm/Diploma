import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./currentUser.slice";
import homeCoursesSlice from "./homeCourses.slice";
export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    homeCourses: homeCoursesSlice
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
