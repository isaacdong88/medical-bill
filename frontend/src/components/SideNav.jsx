import { useNavigate } from "react-router-dom";
import truffleHealth from "../images/truffleHealth.png";
import docIcon from "../images/docIcon.png";
import homeIcon from "../images/homeIcon.png";
import logoutIcon from "../images/logoutIcon.png";
import paymentIcon from "../images/paymentIcon.png";
import profileIcon from "../images/profileIcon.png";

function SideNav() {
  const navigate = useNavigate();
  return (
    <div className="side-nav">
      <div className="logo">
        <img src={truffleHealth} alt="logo" />
      </div>
      <div className="profile-pic">
        <img src={profileIcon} alt="" />
      </div>
      <div className="link-ctn">
        <div
          className="nav-links"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={homeIcon} alt="icon" />
          <h4>My Account</h4>
        </div>

        <div
          className="nav-links"
          onClick={() => {
            navigate("/medicalbills");
          }}
        >
          <img src={docIcon} alt="icon" />
          <h4>Medical Bills</h4>
        </div>

        <div
          className="nav-links"
          onClick={() => {
            navigate("/paybills");
          }}
        >
          <img src={paymentIcon} alt="icon" />
          <h4>Pay Bills</h4>
        </div>

        <div className="nav-links">
          <img src={logoutIcon} alt="icon" />
          <h4>Log Out</h4>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
