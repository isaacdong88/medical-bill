import React from "react";
import { useNavigate } from "react-router-dom";

function MyAccount() {
  const navigate = useNavigate();
  return (
    <div>
      <div>My Account</div>
      <button
        className="enterbill-btn"
        onClick={() => {
          navigate("/medicalbills");
        }}
      >
        New Bill
      </button>
    </div>
  );
}

export default MyAccount;
