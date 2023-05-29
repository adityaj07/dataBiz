import { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(nav => !nav)
  }

  return (
    <div className="max-w-[1240px] flex justify-between items-center h-24 px-4 m-auto text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">dataBiz.</h1>
      <ul className="hidden md:flex">
        <li className="text-xl m-4 cursor-pointer hover:text-[#00df9a] hover: ease-in-out duration-100">Home</li>
        <li className="text-xl m-4 cursor-pointer hover:text-[#00df9a] hover: ease-in-out duration-100">Company</li>
        <li className="text-xl m-4 cursor-pointer hover:text-[#00df9a] hover: ease-in-out duration-100">Resources</li>
        <li className="text-xl m-4 cursor-pointer hover:text-[#00df9a] hover: ease-in-out duration-100">About</li>
        <li className="text-xl m-4 cursor-pointer hover:text-[#00df9a] hover: ease-in-out duration-100">Contact</li>
      </ul>

      <div onClick={handleNav} className="block md:hidden"> 
        {!nav ? <RiCloseFill size={20} className="cursor-pointer"/> : <RiMenu3Fill size={20} className="cursor-pointer"/>}
      </div>

      {/* MOBILE NAV   */}
      <div className={!nav ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-600 h-full bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%]"}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 mt-[1.9rem]">
          dataBiz.
        </h1>
        <ul className="flex flex-col uppercase p-3">
          <li className="m-4 border-b border-gray-700 text-xl cursor-pointer hover:text-[#00df9a] hover: ease-in-out duration-100">Home</li>
          <li className="m-4 border-b border-gray-700 text-xl cursor-pointer hover:text-[#00df9a] hover: ease-in-out duration-100">Company</li>
          <li className="m-4 border-b border-gray-700 text-xl cursor-pointer hover:text-[#00df9a] hover: ease-in-out duration-100">Resources</li>
          <li className="m-4 border-b border-gray-700 text-xl cursor-pointer hover:text-[#00df9a] hover: ease-in-out duration-100">About</li>
          <li className="m-4 text-xl cursor-pointer hover:text-[#00df9a] hover: ease-in-out duration-100">Contact</li>
        </ul>
      </div>
      {/* MOBILE NAV END  */}
    </div>
  );
};

export default Navbar;
