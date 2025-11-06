import { LOGO_URL } from "../apidata/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` flex justify-between transition-all duration-300 ${
        isSticky ? "sticky top-0 bg-white shadow-md z-50" : "relative"
      }`}
    >
      <div className="logo-container">
        <img className="w-25" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex self-center gap-6 pr-6 items-center">
        <ul className="flex gap-6 justify-start">
          <li className="font-bold hover:shadow-amber-600">
            <Link to="http://localhost:1234">Home</Link>
          </li>
          <li className="font-bold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="font-bold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="font-bold">Cart</li>
        </ul>
        <button
          className="text-amber-50 bg-sky-500 hover:bg-sky-700 cursor-pointer p-2 rounded-sm font-bold"
          onClick={() => {
            btnName === "logout" ? setBtnName("login") : setBtnName("logout");
          }}
        >
          {btnName}
        </button>
      </div>
    </header>
  );
};

export default Header;
