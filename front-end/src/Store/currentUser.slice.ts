import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Roles } from "../Utils/enums";
import { RootState } from "./store";
import { currentUser } from "../Utils/interfaces";

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
    singUp: (state, action: PayloadAction<currentUser>) => {
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
    },

    singIn: (state, action: PayloadAction<any>) => {
      fetch("http://localhost:3001/user/singin", {
        method: "GET", // ???
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(action.payload)
      })
        .then((response) => response.json())
        .then((result) => result);
    }
  }
});

export const { singUp, singIn } = currentUserSlice.actions;

export const selectCurrentUser = (state: RootState) => state.currentUser;

export default currentUserSlice.reducer;
