import React from "react";
import { useNavigate } from "react-router-dom";

function MyAccount() {
  const navigate = useNavigate();
  return (
    <div>
      <div>My Account</div>
      <button
        onClick={() => {
          navigate("/medicalbills");
        }}
      >
        Enter New Bill
      </button>
    </div>
  );
}

export default MyAccount;
