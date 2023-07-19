import React from "react";
import logo from "../images/logo.svg";
import inicio from "../images/home.svg";
import facturas from "../images/FACTURAS.svg";
import settings from "../images/settings.svg";
import usuario from "../images/usuario.svg";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  return (
    <div className="sidebar_menu">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="menu_list">
        <li className="menu_list_item">
          <img src={inicio} alt="Link button" />
          <Link to="/">Incio</Link>
        </li>
        <li className="menu_list_item">
          <img src={facturas} alt="Link button" />
          <Link to="/facturas">Facturas</Link>
        </li>
        <li className="menu_list_item">
          <img src={usuario} alt="Link button" />
          <Link to="/inquilinos">Inquilinos</Link>
        </li>
        <li className="menu_list_item">
          <img src={settings} alt="Link button" />
          <Link to="/locales">Locales</Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
