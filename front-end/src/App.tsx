import "./App.css";
import { RouterProvider } from "react-router-dom";
import { rootRouter } from "./Routers/root";

function App() {
  return (
    <div className="App">
      <RouterProvider router={rootRouter}/>
    </div>
  );
}

export default App;
