import React, { useState } from "react";
import logo from "../Images/VET_logo1.png";
import { Link } from "react-router-dom";
import BankDetailsAccordian from "./Accordians/BankDetailsAccordian";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="z-10 sticky top-0 flex justify-between bg-green-100 md:z-10 shadow-lg md:sticky md:top-0 w-full bg-opacity-75 backdrop-blur-sm items-center md:py-2">
        <Link to="/">
          <img
            className="w-16 rounded-full ml-2 md:ml-20"
            alt="vet_logo"
            src={logo}
          />
        </Link>
        <div className="flex md:mr-24">
          {/* Hamburger Menu for mobile */}
          <div className="mr-5 block md:hidden">
            <button
              className="text-gray-800 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-8 h-8 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
                />
              </svg>
            </button>
          </div>
          {/* Menu Items */}
          <ul
            className={`absolute flex flex-col md:flex-row pb-2 justify-start left-0 mt-12 md:mt-0 w-full bg-white md:bg-transparent md:flex md:relative ${
              showMenu ? "block" : "hidden"
            } md:mr-16`}
          >
            <li className="border border-b-2 md:border-none text-lg px-5 py-1 cursor-pointer hover:text-green-600 font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className="border border-b-2 md:border-none text-lg px-5 py-1 cursor-pointer hover:text-green-600 font-semibold">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="border border-b-2 md:border-none text-lg px-5 py-1 cursor-pointer hover:text-green-600 font-semibold">
              <Link to="/facilities">Facilities</Link>
            </li>
            <li className="border border-b-2 md:border-none text-lg px-5 py-1 cursor-pointer hover:text-green-600 font-semibold">
              <Link to="/faculties">Faculties</Link>
            </li>
            <li className="border border-b-2 md:border-none text-lg px-5 py-1 cursor-pointer hover:text-green-600 font-semibold">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="border border-b-2 md:border-none text-lg px-5 py-1 cursor-pointer hover:text-green-600 font-semibold">
              <Link to="/aboutus">About Us</Link>
            </li>
            <li className="border border-b-2 md:border-none text-lg px-5 py-1 cursor-pointer hover:text-green-600 font-semibold">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="border border-b-2 md:border-none text-lg px-5 py-1 cursor-pointer hover:text-green-600 font-semibold">
              <Link to="/admission">ADMISSION</Link>
            </li>
            <li lassName="text-lg px-5 py-1 cursor-pointer font-semibold">
              <BankDetailsAccordian />
            </li>
          </ul>
        </div>
        {/* Pay and Admission buttons */}
      </div>
    </>
  );
};

export default Header;
