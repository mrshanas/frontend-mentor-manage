import React from "react";
import manage from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import { links } from "./constants";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center md:justify-between mx-auto container my-5 h-6">
      <div className="basis-1/2 md:basis-1/4">
        <img src={manage} alt="" />
      </div>
      <div className="hidden md:basis-1/2 md:flex">
        <ul className="md:flex md:items-center md:justify-evenly">
          {links.map(({ key, link, name }) => (
            <li key={key}>
              <a href={link} className="hover:text-paleblue">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:basis-1/4 md:text-center md:flex">
        <button
          type="button"
          className="bg-red w-2/3 h-full text-white text-xl p-2 rounded-3xl hover:text-paleblue"
        >
          Get Started
        </button>
      </div>
      <div className="md:hidden">
        <img src={hamburger} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
