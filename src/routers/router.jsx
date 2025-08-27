import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { PrivatePage } from "../pages/PrivatePage";
import { SignUp } from "../login/SignUp";
import { Login } from "../login/Login";
export const MyRoutes = () => {
  return (
    <BrowserRouter basename="Shop">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/privatePage"
          element={
            <ProtectedRoute>
              <PrivatePage />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
