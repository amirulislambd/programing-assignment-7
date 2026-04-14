import React from "react";

import MyNavLink from "./MyNavLink";
import MenuIcon from "./MenuIcon";

const Navbar = () => {
  const navLink = [
    { href: "/", label: "Home" },
    { href: "/timeLine", label: "Timeline" },
    { href: "/stats", label: "Stats" },
  ];

  return (
    <div className=" sticky z-10 shadow-sm py-2 md:py-3 px-2 ">
      <div className="flex items-center justify-between container mx-auto">
      <div>
        <h1 className="bg-gradient-to-r from-green-800 to-green-600 transform bg-clip-text text-transparent text-xl md:text-4xl font-bold ">
          KeenKeeper
        </h1>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-2 md:gap-3">
          {navLink.map((link, i) => (
            <MyNavLink key={i} href={link.href}>
              {link.label}
            </MyNavLink>
          ))}
        </ul>
      </div>
      <div className="md:hidden">
        <MenuIcon navLink={navLink}/>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
