import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();
  return (
    <div>
      WelcomePage
      <div>
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
