import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteBill } from "../features/bills/billsSlice";

function MyAccount() {
  const dispatch = useDispatch();
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
              <div>
                <button
                  onClick={async () => {
                    await dispatch(deleteBill(bill._id));
                    fetchBills();
                  }}
                >
                  X
                </button>
              </div>
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
      <div className="billdisplay">
        {bills?.length > 0 ? bills : <div>You have no bills</div>}
      </div>
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
