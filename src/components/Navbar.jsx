import React from "react";
import '../Css/navbar.scss';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const Navbar = () => {
  return (
    <div className="Nav_container">
      <div className="Nav_left">
        <img
          src="https://media.glassdoor.com/sqll/2875369/flathalt-technologies-squarelogo-1561089371211.png"
          alt="/"
        />
        <span>Flathalt</span>
      </div>
      <div className="Nav_right">
        <div>
          <button>List your place</button>
        </div>
        <div className="Inner_right">
          <AccountCircleIcon />
          <span>Log in/signup</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;