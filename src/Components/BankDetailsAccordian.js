import React, { useState } from "react";
import QR from "../Images/VET_logo1.png";
const BankDetailsAccordian = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <button
        onClick={toggleAccordion}
        className="border border-gray-400 cursor-pointer text-lg py-1 rounded-lg px-3 font-semibold hover:border-yellow-500 hover:bg-yellow-500 hover:text-white hover:cursor-pointer"
      >
        {/* {isOpen ? "Hide Details" : "Show Details"} */}
        Pay now
      </button>

      {isOpen && (
        <div className="mt-4 p-3 flex w-[30%] -ml-72 justify-center items-center bg-white rounded-lg absolute">
          <div className="w-[60%] mr-2">
            <p className="text-black text-sm my-1">
              <span className="font-bold">Bank :</span> HDFC Bank Ltd
            </p>
            <p className="text-black text-sm my-1">
              <span className="font-bold">Account Holder :</span> THE PRINCIPAL
              VBH COLLEGE OF PHARMACY
            </p>
            <p className="text-black text-sm my-1">
              <span className="font-bold">A/C no :</span> 50200062248654
            </p>
            <p className="text-black text-sm my-1">
              <span className="font-bold">IFSC Code :</span> HDFC0009281
            </p>
            <p className="text-black text-sm my-1">
              <span className="font-bold">Branch :</span> BADEPUR COLONY
              GULBARGA
            </p>
            <p className="text-black text-sm my-1">
              <span className="font-bold">Account Type :</span> CURRENT
            </p>
          </div>

          <div className="w-[40%] ml-2 ">
            <img className="" alt="" src={QR} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BankDetailsAccordian;
