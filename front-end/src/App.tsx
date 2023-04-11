import "./App.css";
import { RouterProvider } from "react-router-dom";
import { rootRouter } from "./Routers/root";

function App() {
  return (
    <RouterProvider router={rootRouter}/>
  );
}

export default App;
