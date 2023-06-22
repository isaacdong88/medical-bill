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
import detectivePig from "../src/images/detectivePig.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function App() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [text] = useTypewriter({
    words: ["medical bills", "EOBs", "health insurance plan"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 80,
  });
  return (
    <>
      {user ? (
        <div className="App">
          <SideNav />
          <Dashboard />
        </div>
      ) : (
        <div className="App2">
          <WelcomePage />
          <div className="message">
            <h1 style={{ fontSize: "3rem" }}>
              We sniff out the good stuff on your
              <span style={{ color: "#8c87d6" }}>
                {" "}
                {text}
                <Cursor />
              </span>
            </h1>
          </div>
          <div className="detectivePig">
            <img src={detectivePig} />
          </div>
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
