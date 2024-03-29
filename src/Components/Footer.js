import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< HEAD:src/Components/MainContainer/Footer.js
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faHome,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
=======
>>>>>>> f9617380820298bbaa48e137dc77f00e2bc37c23:src/Components/Footer.js

import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../Utils/Constants";
import { faIcon } from "../Utils/Constants";
import { InstTiming } from "../Utils/Constants";
const Footer = () => {
  return (
    <>
      <div className=" p-10 flex justify-between bg-gray-200">
        <div className="w-[25%]">
          <h2 className="font-bold text-2xl">About Us</h2>
          <p className="mt-2 ">
            Veerbhadreshwar College Of Pharmacy is managed by Veerbhadreshwar
            Education Trust. The Trust was established in the year 2017 to
            provide quality education in the field of health sciences.
          </p>
        </div>
        <div className="w-[12%]">
          <h2 className="font-bold ml-7 text-2xl">Quick Links</h2>
          <ul className="mt-2 ml-8">
            {navItems.map((item, index) => (
              <li className=" cursor-pointer">
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h2 className="font-bold text-2xl">Institute Hours</h2>
          {InstTiming.map((inst, index) => (
            <p className="">{inst}</p>
          ))}
        </div>
        <div className="">
          <div className="">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faHome} />
              <h1 className="font-bold text-lg px-2"> Address</h1>
            </div>
            <p className="w-60  mt-2">
              M.G Road, Behind KEB Office, Gulbarga, KA 585103, INDIA{" "}
            </p>
          </div>
          <div className="mt-2">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} />
              <h1 className="font-bold text-lg px-2"> Phone</h1>
            </div>
            <p className="w-60  mt-1">9916334758</p>
          </div>
          <div className="mt-2">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} />
              <h1 className="font-bold text-lg px-2"> Email</h1>
            </div>
            <p className="w-60  mt-1">chairmanvetklbg@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="bg-black flex justify-evenly items-center">
        <h1 className=" text-white">
          2019 © Veerbhadreshwar Pharmacy College All Right Reserved.
        </h1>
        <div className="text-white flex items-center ">
          <p className="text-xl">Social :</p>
          <ul className="flex  ml-5 text-2xl">
            {faIcon.map((faicon) => (
              <li className="p-2 cursor-pointer">
                <Link to="/">
                  <FontAwesomeIcon icon={faicon} />
                </Link>
              </li>
            ))}
          </ul>
        </div>{" "}
        */
      </div>
    </>
  );
};

export default Footer;