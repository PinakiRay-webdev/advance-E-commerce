import React, { useState } from "react";
import { navbar } from "../Constants/Constants";
import {
  IoSearchOutline,
  IoHeartOutline,
  IoCartOutline,
  IoMenu,
  IoClose
} from "react-icons/io5";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState("false");
  const [menuIcon, setMenuIcon] = useState("false");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setMenuIcon(!menuIcon);
  };

  return (
    <div className="w-full h-fit border-b">
      <div className="max-w-screen-xl mx-auto py-3 px-2 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <p onClick={toggleMenu} className="text-3xl md:hidden">
            {menuIcon ? <IoMenu /> : <IoClose /> }
          </p>
          <h1 className="font-semibold text-2xl cursor-pointer ">Exclusive</h1>
        </div>

        <div id="nav-items" className="hidden md:flex items-center gap-5 ">
          {navbar.map((Element, id) => (
            <p
              id="nav-elements"
              className="text-zinc-700 cursor-pointer hover:text-black transition-all duration-100"
              key={id}
            >
              {Element}
            </p>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="relative bg-[#F5F5F5] flex py-2 px-3 items-center gap-3">
            <input
              className="bg-transparent outline-none"
              type="text"
              placeholder="What are you looking for ?"
            />
            <p className="text-xl cursor-pointer ">
              <IoSearchOutline />
            </p>
          </div>
          <p className="text-xl cursor-pointer">
            <IoHeartOutline />
          </p>
          <p className="text-xl cursor-pointer">
            <IoCartOutline />
          </p>
        </div>
      </div>

      {/* mobile site navbar  */}
      <div
        id="mobile-navbar"
        className={`${isOpen ? "translate-x-[-100%]" : "translate-x-[0%]"} bg-black max-w-screen-xl mx-auto h-fit py-5 md:hidden transition-all duration-100 ease-in-out`}>
        <div id="mobile-nav-items" className="px-3">
          {navbar.map((Element, id) => (
            <p
              id="mobile-nav-elements"
              className="text-white cursor-pointer leading-[3rem]"
              key={id}
            >
              {Element}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
