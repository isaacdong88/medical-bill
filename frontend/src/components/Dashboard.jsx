import React from "react";
import { Route, Routes } from "react-router-dom";
import MedicalBill from "../pages/MedicalBill";
import MyAccount from "../pages/MyAccount";
import PayBills from "../pages/PayBills";
import WelcomePage from "../pages/WelcomePage";

function Dashboard() {
  return (
    <div className="dashboard">
      <Routes>
        <Route path="/" element={<MyAccount />}></Route>
        <Route path="/medicalbills" element={<MedicalBill />}></Route>
        <Route path="/paybills" element={<PayBills />}></Route>
        <Route path="/welcome" element={<WelcomePage />}></Route>
      </Routes>
    </div>
  );
}

export default Dashboard;
