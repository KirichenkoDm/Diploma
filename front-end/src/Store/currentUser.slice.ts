import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchStatus, Roles } from "../Utils/enums";
import { RootState } from "./store";
import { coursesListItem, currentUser, updateUserData } from "../Utils/interfaces";
import { AutorisationFormData, RegistrationFormData } from "../Utils/formDataTypes";
import { loadUser } from "../Utils/localStorage";

const guestUser: currentUser = {
  fetchStatus: FetchStatus.idle,
  email: null,
  name: "Guest",
  surname: null,
  _id: null,
  role: Roles.guest,
  courses: []
};

export const fetchSignUp = createAsyncThunk(
  "currentUser/fetchSignUp",
  async(signUpData: RegistrationFormData) => {
    try {
      const response = await fetch("http://localhost:3001/user/signup",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(signUpData)
        });
      const result = await response.json();
      result.newUser.courses = result.newUser.courses.map((course: string) => ({ _id: course }));
      if (result.error) {
        return guestUser;
      } else {
        return result.newUser as currentUser;
      }
    } catch (err) {
      console.log(err);
    }
  });

export const fetchSignIn = createAsyncThunk(
  "currentUser/fetchSignIn",
  async(signIpData: AutorisationFormData, { getState }) => {
    try {
      const state: any = getState();
      const searchParams = new URLSearchParams();
      searchParams.append("email", signIpData.email);
      searchParams.append("password", signIpData.password);
      const response = await fetch("http://localhost:3001/user/signin?" + searchParams, {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        }
      });
      const result = await response.json();
      if (result.error) {
        return state.currentUser;
      } else {
        return result.existingUser as currentUser;
      }
    } catch (err) {
      console.log(err);
    }
  });

export const fetchUserCourses = createAsyncThunk(
  "currentUser/fetchUserCourses",
  async(data, { getState }) => {
    try {
      const state: any = getState();
      const response = await fetch(`http://localhost:3001/user/${state.currentUser._id}/courses`, {
        method: "GET"
      });
      const result = await response.json();
      if (result.error) {
        return state.currentUser;
      } else {
        return result.courseData as coursesListItem[];
      }
    } catch (err) {
      console.log(err);
    }
  });

export const fetchUpdateUser = createAsyncThunk(
  "currentUser/updateUser",
  async(data: updateUserData, { getState }) => {
    try {
      const state: any = getState();
      const response = await fetch(
        "http://localhost:3001/user/" + state.currentUser._id,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(data)
        });
      const result = await response.json();
      if (result.error) {
        return guestUser;
      } else {
        return result.updatedUser as currentUser;
      }
    } catch (err) {
      console.log(err);
    }
  });

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: loadUser() || guestUser,
  reducers: {
    logOut: () => {
      return guestUser;
    },

    deleteAccount: () => {
      fetch("http://localhost:3001/user/", /* userId */{
        method: "Delete",
        headers: {
          "Content-type": "application/json"
        }
      })
        .then((response) => response.json())
        .then((result) => console.log(result));
      return guestUser;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSignUp.pending, (state) => {
        state.fetchStatus = FetchStatus.loading;
      })
      .addCase(fetchSignUp.fulfilled, (state, action: PayloadAction<any>) => { // any
        return {
          ...action.payload,
          fetchStatus: FetchStatus.succeeded
        };
      })
      .addCase(fetchSignIn.pending, (state) => {
        state.fetchStatus = FetchStatus.loading;
      })
      .addCase(fetchSignIn.fulfilled, (state, action: PayloadAction<any>) => { // any
        return {
          ...action.payload,
          fetchStatus: FetchStatus.succeeded
        };
      })
      .addCase(fetchUserCourses.pending, (state) => {
        state.fetchStatus = FetchStatus.loading;
      })
      .addCase(fetchUserCourses.fulfilled, (state, action: PayloadAction<any>) => { // any
        state.courses = action.payload;
        state.fetchStatus = FetchStatus.succeeded;
      })
      .addCase(fetchUpdateUser.pending, (state) => {
        state.fetchStatus = FetchStatus.loading;
      })
      .addCase(fetchUpdateUser.fulfilled, (state, action: PayloadAction<any>) => { // any
        state.courses = action.payload.courses;
        state.fetchStatus = FetchStatus.succeeded;
        // return {
        //   ...action.payload,
        //   fetchStatus: FetchStatus.succeeded
        // };
      });
  }
});

export const { logOut, deleteAccount } = currentUserSlice.actions;

export const selectCurrentUser = (state: RootState) => state.currentUser;

export default currentUserSlice.reducer;
