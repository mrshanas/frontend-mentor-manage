import React from "react";
import manage from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import Button from "./Button";
import { links } from "./constants";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between mx-auto my-5 h-6 px-4">
      <div className="basis-1/4">
        <img src={manage} alt="" className="mx-auto" />
      </div>
      <div className="hidden md:basis-1/2 md:block">
        <ul className="flex items-center justify-evenly">
          {links.map(({ key, link, name }) => (
            <li key={key}>
              <a href={link} className="hover:text-paleblue">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:basis-1/4 md:block">
        <Button buttonWidth="2/3" />
      </div>
      <div className="md:hidden">
        <img src={hamburger} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
