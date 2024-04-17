import { createBrowserRouter } from "react-router-dom";
import RegistrationPage from "../Pages/cs-registration-page";
import HomePage from "../Pages/cs-home-page";
import LoginPage from "../Pages/cs-login-page";
import UserPage from "../Pages/cs-user-page";
import ErrorPage from "../Pages/cs-error-page";
import CoursePage from "../Pages/cs-course-page";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/singup",
    element: <RegistrationPage/>
  },
  {
    path: "/singin",
    element: <LoginPage/>
  },
  {
    path: "/user/:userid",
    element: <UserPage/>
  },
  {
    path: "/course/:courseid",
    element: <CoursePage/>
  }
]);
