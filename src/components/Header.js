// import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/">
        <img src={Logo} className="header__logo" alt="Logo Kasa" />
      </NavLink>
      <div className="header__navigation">
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;