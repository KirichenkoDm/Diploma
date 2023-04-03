import { createBrowserRouter } from "react-router-dom";
import RegistrationPage from "../Pages/cs-registration-page";
import App from "../App";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/register",
    element: <RegistrationPage/>
  }
]);
