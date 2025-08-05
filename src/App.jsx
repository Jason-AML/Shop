import { MyRoutes } from "./routers/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  return (
    <>
      <MyRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
