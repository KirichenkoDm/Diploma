import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Roles } from './enums'
import { RootState } from './store';

interface currentUser {
  email: string| null,
  name: string,
  surname: string | null,
  role: Roles,
}

const guestUser: currentUser = {
  email: null,
  name: "Guest",
  surname: null,
  role: Roles.guest,
}

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: guestUser,
  reducers: {
    logIn: (state, action: PayloadAction<currentUser>) => {
      return action.payload;
      //send request here
    },
    logOut: state => {
      state = guestUser
      //do something?
    }
  }
});

export const {logIn, logOut} = currentUserSlice.actions;

export const selectCurrentUser = (state: RootState) => state.currentUser

export default currentUserSlice.reducer;