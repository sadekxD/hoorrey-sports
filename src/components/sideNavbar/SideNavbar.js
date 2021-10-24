import React from "react";
import NavItem1 from "../navitems/NavItem1";

const SideNavbar = () => {
  return (
    <div className="sidenav">
      <div className="h1">Sports</div>
      {navLinks.map((item) => (
        <NavItem1 key={item.title} title={item.title} path={item.path} />
      ))}
    </div>
  );
};

const navLinks = [
  { title: "Live", path: "/live" },
  { title: "Upcoming", path: "/upcoming" },
  { title: "Result", path: "/result" },
];

export default SideNavbar;
