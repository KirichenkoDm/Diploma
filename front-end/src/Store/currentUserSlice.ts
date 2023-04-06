import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Roles } from "../Utils/enums";
import { RootState } from "./store";

interface currentUser {
  email: string| null,
  name: string,
  surname: string | null,
  password: string | null,
  role: Roles,
}

const guestUser: currentUser = {
  email: null,
  name: "Guest",
  surname: null,
  password: null,
  role: Roles.guest
};

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: guestUser,
  reducers: {
    logIn: (state, action: PayloadAction<currentUser>) => {
      console.log(JSON.stringify(action.payload));
      fetch("http://localhost:3001/user/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(action.payload)
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        });
      return action.payload;

      // send request here
    }
    // logOut: state => {
    //   state = guestUser;
    //   // do something?
    // }
  }
});

export const { logIn } = currentUserSlice.actions;

export const selectCurrentUser = (state: RootState) => state.currentUser;

export default currentUserSlice.reducer;
