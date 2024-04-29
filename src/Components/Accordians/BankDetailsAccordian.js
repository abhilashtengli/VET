import React, { useState, useEffect, useRef } from "react";
import QR from "../../Images/VET_logo1.png";

const BankDetailsAccordian = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div className="">
      <button
        onClick={toggleAccordion}
        className="border bg-green-600 md:bg-none border-gray-400 cursor-pointer ml-5 md:ml-0 md:w-full mt-5 md:mt-0 w-[90%] text-lg py-1 rounded-lg px-3 font-semibold hover:border-yellow-500 hover:bg-yellow-500 hover:text-white hover:cursor-pointer"
      >
        Pay now
      </button>

      {isOpen && (
        <div
          className="lg:mt-4 p-3 w-full mt-1 border-2 border-gray-300 shadow-lg flex lg:w-[40%] lg:-ml-44 justify-center items-center bg-white rounded-lg absolute"
          ref={modalRef}
        >
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
