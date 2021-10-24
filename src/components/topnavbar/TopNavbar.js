import React from "react";
import NavItem2 from "../navitems/NavItem2";

const TopNavbar = () => {
  return (
    <div className="top-nav">
      <div className="nav-wrapper">
        {navLinks.map((item) => (
          <NavItem2 key={item.title} title={item.title} path={item.path} />
        ))}
      </div>
    </div>
  );
};

const navLinks = [
  { title: "Live", path: "/live" },
  { title: "Upcoming", path: "/upcoming" },
  { title: "Result", path: "/result" },
];

export default TopNavbar;
