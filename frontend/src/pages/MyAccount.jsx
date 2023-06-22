import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function MyAccount() {
  const [bills, setBills] = useState(null);
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const fetchBills = async () => {
    const response = await fetch(`/bills/${user._id}`);
    const data = await response.json();
    console.log(data);
    setBills(
      data.map((bill, key) => {
        return (
          <div key={key} className="medicalbills">
            <div className="medicalbill-header">
              <h4>Hospital: {bill.hospital}</h4>
              <h4>Service Date: {bill.servicedate}</h4>
            </div>
            <div className="billimages">
              {bill.image.map((photo) => {
                return (
                  <div className="billimage">
                    <img src={photo} />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })
    );
  };

  useEffect(() => {
    fetchBills();
  }, []);

  return (
    <div>
      <div className="header2">
        <h1>View your medical bills</h1>
      </div>
      <div className="billdisplay">{bills}</div>
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
