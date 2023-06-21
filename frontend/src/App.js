import "./App.css";
import Dashboard from "./components/Dashboard";
import SideNav from "./components/SideNav";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import WelcomePage from "./pages/WelcomePage";

function App() {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      {user ? (
        <div className="App">
          <SideNav />
          <Dashboard />
        </div>
      ) : (
        <div>
          <WelcomePage />
          <Routes>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
