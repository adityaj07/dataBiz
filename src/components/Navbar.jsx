import React, { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <nav className="max-w-[1240px] flex justify-between items-center h-24 px-4 m-auto text-white">
      <h1 className="text-3xl font-bold text-[#00df9a]">dataBiz.</h1>
      <ul className="hidden md:flex">
        <li className="text-xl m-4 cursor-pointer hover:text-[#00df9a] transition-colors duration-100">
          Home
        </li>
        <li className="text-xl m-4 cursor-pointer hover:text-[#00df9a] transition-colors duration-100">
          Company
        </li>
        <li className="text-xl m-4 cursor-pointer hover:text-[#00df9a] transition-colors duration-100">
          Resources
        </li>
        <li className="text-xl m-4 cursor-pointer hover:text-[#00df9a] transition-colors duration-100">
          About
        </li>
        <li className="text-xl m-4 cursor-pointer hover:text-[#00df9a] transition-colors duration-100">
          Contact
        </li>
      </ul>

      <div onClick={handleNavToggle} className="block md:hidden">
        {isNavOpen ? (
          <RiCloseFill size={20} className="cursor-pointer" />
        ) : (
          <RiMenu3Fill size={20} className="cursor-pointer" />
        )}
      </div>

      {/* MOBILE NAV   */}
      <div
        className={`fixed left-0 top-0 w-[60%] border-r border-r-gray-600 h-full bg-[#000300] transition-transform duration-500 ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-3xl font-bold text-[#00df9a] m-4 mt-[1.9rem]">
          dataBiz.
        </h1>
        <ul className="flex flex-col uppercase p-3">
          <li className="m-4 border-b border-gray-700 text-xl cursor-pointer hover:text-[#00df9a] transition-colors duration-100">
            Home
          </li>
          <li className="m-4 border-b border-gray-700 text-xl cursor-pointer hover:text-[#00df9a] transition-colors duration-100">
            Company
          </li>
          <li className="m-4 border-b border-gray-700 text-xl cursor-pointer hover:text-[#00df9a] transition-colors duration-100">
            Resources
          </li>
          <li className="m-4 border-b border-gray-700 text-xl cursor-pointer hover:text-[#00df9a] transition-colors duration-100">
            About
          </li>
          <li className="m-4 text-xl cursor-pointer hover:text-[#00df9a] transition-colors duration-100">
            Contact
          </li>
        </ul>
      </div>
      {/* MOBILE NAV END  */}
    </nav>
  );
};

export default Navbar;

