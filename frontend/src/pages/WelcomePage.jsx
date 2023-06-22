import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import truffleHealth from "../images/truffleHealth.png";

function WelcomePage() {
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, []);

  return (
    <div className="welcome-nav">
      <div className="welcome-logo">
        <img src={truffleHealth} alt="none" />
      </div>
      <div className="welcome-btn">
        {login ? (
          <button
            onClick={() => {
              navigate("/login");
              setLogin(false);
            }}
          >
            Login
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/signup");
              setLogin(true);
            }}
          >
            Sign Up
          </button>
        )}
      </div>
      {/* <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          navigate("/signup");
        }}
      >
        Sign Up
      </button> */}
    </div>
  );
}

export default WelcomePage;
