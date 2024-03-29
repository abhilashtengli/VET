import React from "react";
import logo from "../Images/VET_logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="z-10 shadow-lg fixed w-screen bg-white  bg-opacity-75 backdrop-blur-sm	 flex justify-between items-center  py-2 ">
        <img
          className="w-20 rounded-full ml-20"
          alt="vet_logo"
          src={logo}
        ></img>
        <div className="flex mr-32">
          <ul className="flex  mr-20 hover:cursor-pointer">
            <li className="text-lg px-5 py-1 cursor-pointer hover:text-green-600  font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className="text-lg px-5 py-1 cursor-pointer hover:text-green-600  font-semibold">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="text-lg px-5 py-1 cursor-pointer hover:text-green-600  font-semibold">
              <Link to="/facilities">Facilities</Link>
            </li>
            <li className="text-lg px-5 py-1 cursor-pointer hover:text-green-600  font-semibold">
              <Link to="/faculties">Faculties</Link>
            </li>
            <li className="text-lg px-5 py-1 cursor-pointer hover:text-green-600  font-semibold">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="text-lg px-5 py-1 cursor-pointer hover:text-green-600  font-semibold">
              <Link to="/aboutus">About Us</Link>
            </li>
            <li className="text-lg px-5 py-1 cursor-pointer hover:text-green-600  font-semibold">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <p className="border border-gray-400 cursor-pointer text-lg py-1 rounded-lg px-3 font-semibold hover:bg-black hover:text-white hover:cursor-pointer">
            <Link to="/admission">ADMISSION</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
