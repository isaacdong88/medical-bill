import { useNavigate } from "react-router-dom";

function SideNav() {
  const navigate = useNavigate();
  return (
    <div className="side-nav">
      <div className="logo">
        <img
          src="https://tech.cornell.edu/wp-content/uploads/2023/02/logo_full_trufflehealth-2-Rui-Maki.png"
          alt="logo"
        />
      </div>
      <div className="profile-pic">
        <img
          src="https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png"
          alt=""
        />
      </div>
      <div className="link-ctn">
        <div
          className="nav-links"
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src="https://icon-library.com/images/e84c23f89e_72553.png"
            alt="icon"
          />
          <h4>My Account</h4>
        </div>

        <div
          className="nav-links"
          onClick={() => {
            navigate("/medicalbills");
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/104/104090.png"
            alt="icon"
          />
          <h4>Medical Bills</h4>
        </div>

        <div
          className="nav-links"
          onClick={() => {
            navigate("/paybills");
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/6993/6993594.png"
            alt="icon"
          />
          <h4>Pay Bills</h4>
        </div>

        <div className="nav-links">
          <img
            src="https://cdn-icons-png.flaticon.com/512/152/152534.png"
            alt="icon"
          />
          <h4>Log Out</h4>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
