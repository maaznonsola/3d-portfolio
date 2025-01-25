import React from "react";
import {NavLink} from "react-router";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center"
      >
        <p className="brown-gradient_text">MN</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({isActive}) =>
            isActive ? "text-amber-700" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({isActive}) =>
            isActive ? "text-amber-700" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
