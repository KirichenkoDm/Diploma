import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./currentUser.slice";
import homeCoursesSlice from "./homeCourses.slice";
import { saveUser } from "../Utils/localStorage";
export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    homeCourses: homeCoursesSlice
  }
});

store.subscribe(() => {
  saveUser(store.getState().currentUser);
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
