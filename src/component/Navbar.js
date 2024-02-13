import React from 'react'
import logo from '../images/logo.svg';
import nauxialogo from '../images/Union.svg';

export default function Navbar() {
  return (
    <nav className=" text-white flex justify-between items-center py-2 px-5 sm:px-10 backdrop-blur-sm" style={{backgroundColor:`rgba(73, 73, 73, 0.02)`}}>
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="hidden sm:block h-8 mr-2" />
        <img src={nauxialogo} alt="Logo" className="block sm:hidden mr-2 h-[50px]" />
      </div>
      
      {/* Buttons */}
      <div className="flex font-jura">
        <button className=" border border-transparentWhite hover:bg-blue-600 text-white font-semibold py-1 px-3 mr-4 font-bold">TWITTER</button>
        <button className="hidden sm:block border border-transparentWhite hover:bg-green-600 text-transparentWhite font-semibold py-1 px-3 line-through font-bold">DISCORD</button>
      </div>
    </nav>
  )
}