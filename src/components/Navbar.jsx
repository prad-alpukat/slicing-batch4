import { NavLink } from "react-router-dom";

// import components
import Button from "./Button";

// import gambar
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="container h-20 flex items-center justify-between">
      {/* logo */}
      <NavLink to="/">
        <img src={logo} alt="logo neuverse" />
      </NavLink>

      {/* menus */}
      <div className="flex gap-8 items-center">
        <NavLink to="#features">Features</NavLink>
        <NavLink to="/prices">Prices</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/get-started">
          <Button>Get Started</Button>
        </NavLink>
      </div>
    </nav>
  );
}
