import { currentUser } from "./interfaces";

export const loadUser = () => {
  try {
    const userState = localStorage.getItem("currentUser");
    if (userState === null) {
      return undefined;
    }
    return JSON.parse(userState);
  } catch (err) {
    return undefined;
  }
};

export const saveUser = (currentUser: currentUser) => {
  try {
    const userData = JSON.stringify(currentUser);
    localStorage.setItem("currentUser", userData);
  } catch (err) {
    return undefined;
  }
};
