import React, { useEffect, useRef, useState } from "react";
import logo from "../Images/VET_logo1.png";
import { Link, useLocation } from "react-router-dom";
import BankDetailsAccordian from "./Accordians/BankDetailsAccordian";
import closeMenuIcon from "../Images/close_icon.png";
import hamburgerMenu from "../Images/Hamburger_icon.png";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const modalRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
  }, [showMenu]);

  const handleClick = () => {
    if (showMenu) {
      setShowMenu(false);
    }
    if (location.pathname === "/") {
      window.scroll(0, 0);
    }
  };

  return (
    <>
      <div
        ref={modalRef}
        className="z-10 sticky w-screen top-0 flex justify-between bg-green-100 md:z-10 shadow-lg md:sticky md:top-0 bg-opacity-75 backdrop-blur-sm items-center md:py-2"
      >
        <Link to="/">
          <img
            className="w-16 rounded-full ml-2 md:ml-20"
            alt="vet_logo"
            src={logo}
          />
        </Link>

        <div className="flex  md:mr-24">
          {/* Hamburger Menu for mobile */}
          <div className="mr-5 md:mr-0 block lg:hidden">
            <button
              className="text-gray-800 focus:outline-none"
              onClick={toggleMenu}
            >
              {showMenu ? (
                // Cross Icon
                <img className="w-4" alt="close_menu" src={closeMenuIcon} />
              ) : (
                // Hamburger Icon
                <img className="w-5" alt="" src={hamburgerMenu} />
              )}
            </button>
          </div>
          {/* Menu Items */}
          <ul
            className={`absolute flex flex-col lg:flex-row pb-2 justify-start left-0 mt-12 lg:mt-0 w-full bg-white lg:bg-transparent lg:flex lg:relative ${
              showMenu ? "block" : "hidden"
            } md:mr-16`}
          >
            <li className="border border-b-2 md:border-none text-lg px-5 py-1 cursor-pointer hover:text-green-600 font-semibold">
              <Link to="/" onClick={handleClick}>
                Home
              </Link>
            </li>
            <li className="border border-b-2 md:border-none text-lg px-5 py-1 cursor-pointer hover:text-green-600 font-semibold">
              <Link to="/courses" onClick={handleClick}>
                Courses
              </Link>
            </li>
            <li className="border border-b-2 md:border-none text-lg px-5 py-1 cursor-pointer hover:text-green-600 font-semibold">
              <Link to="/facilities" onClick={handleClick}>
                Facilities
              </Link>
            </li>
            <li className="border border-b-2 md:border-none text-lg px-5 py-1 cursor-pointer hover:text-green-600 font-semibold">
              <Link to="/faculties" onClick={handleClick}>
                Faculties
              </Link>
            </li>
            <li className="border border-b-2 md:border-none text-lg px-5 py-1 cursor-pointer hover:text-green-600 font-semibold">
              <Link to="/gallery" onClick={handleClick}>
                Gallery
              </Link>
            </li>
            <li className="border border-b-2 md:border-none text-lg px-5 py-1 cursor-pointer hover:text-green-600 font-semibold">
              <Link to="/aboutus" onClick={handleClick}>
                About Us
              </Link>
            </li>
            <li className="border border-b-2 md:border-none text-lg px-5 py-1 cursor-pointer hover:text-green-600 font-semibold">
              <Link to="/contact" onClick={handleClick}>
                Contact
              </Link>
            </li>
            <li className="border border-b-2 md:border-none text-lg px-5 py-1 cursor-pointer hover:text-green-600 font-semibold">
              <Link to="/admission" onClick={handleClick}>
                ADMISSION
              </Link>
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
