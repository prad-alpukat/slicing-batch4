import { NavLink } from "react-router-dom";

// import gambar
import logo from "../assets/logo.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";

// import compoentn
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="container border-t py-4">
      {/* footer atas */}
      <div className="flex justify-between items-center py-3">
        <img src={logo} alt="logo neuverse" />
        <div className="flex gap-8 items-center">
          <NavLink to="#features">Features</NavLink>
          <NavLink to="/prices">Prices</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/get-started">
            <Button>Get Started</Button>
          </NavLink>
        </div>
        <div className="flex gap-4 items-center">
          <img src={twitter} alt="twitter" />
          <img src={facebook} alt="twitter" />
        </div>
      </div>
      {/* footer bawah */}
      <div className="text-center text-gray-600 py-5">
        <p>Copyright © 2021 Amiso. All rights reserved.</p>
      </div>
    </footer>
  );
}
