import { createBrowserRouter } from "react-router-dom";
import RegistrationPage from "../Pages/cs-registration-page";
import HomePage from "../Pages/cs-home-page";
import LoginPage from "../Pages/cs-login-page";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/singup",
    element: <RegistrationPage/>
  },
  {
    path: "/singin",
    element: <LoginPage/>
  }
]);
