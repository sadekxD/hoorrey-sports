import React from "react";
import { NavLink } from "react-router-dom";

const NavItem1 = ({ path, title }) => {
  return (
    <NavLink to={path} className="nav-link" activeClassName="active">
      {title}
    </NavLink>
  );
};

export default NavItem1;
