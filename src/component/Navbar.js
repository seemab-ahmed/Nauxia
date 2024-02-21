import React from "react";
import logo from "../images/logo.svg";
import nauxialogo from "../images/Union.svg";
import { useNavigate } from 'react-router-dom';
export default function Navbar({className}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <nav
      className={` text-white flex justify-between items-center py-0 sm:py-4 px-5 sm:px-10 backdrop-blur-sm nav-border z-50 fixed w-[100%] ${className || 'bg-[rgba(73, 73, 73, 0.02)'}`}    >
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="hidden sm:block h-8 mr-2 cursor-pointer" onClick={handleClick} />
        <img
          src={nauxialogo}
          alt="Logo"
          className="block sm:hidden mr-2 h-[70px] cursor-pointer"
          onClick={handleClick}
        />
      </div>

      {/* Buttons */}
      <div className="flex font-jura">
        <button className=" border border-transparentWhite hover:bg-blue-600 text-white font-semibold py-[3px] sm:py-1 px-3 mr-4 font-bold">
          TWITTER
        </button>
        <button className="hidden sm:block border border-transparentWhite hover:bg-green-600 text-transparentWhite font-semibold py-1 px-3 line-through font-bold">
          DISCORD
        </button>
      </div>
    </nav>
  );
}
