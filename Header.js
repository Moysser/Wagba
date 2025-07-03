import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="list-items">
          <li className="list-item">
            <Link to="http://localhost:1234">Home</Link>
          </li>
          <li className="list-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="list-item">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="list-item">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
