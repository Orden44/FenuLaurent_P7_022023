import React from "react";
import { NavLink } from 'react-router-dom';
import Logo from "../assets/img/logo.svg";

function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <img src={Logo} className="header__logo" alt="Logo Kasa" />
      </NavLink>

    </div>
  );
};

export default Header;