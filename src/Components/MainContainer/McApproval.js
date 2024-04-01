import React from "react";
import pci_logo from "../../Images/pci_logo.png";
import bead_logo from "../../Images/bead_logo.png";
const McApproval = () => {
  return (
    <>
      <div className=" bg-gray-200">
        <h1 className=" p-5 text-center text-3xl font-semibold">
          APPROVAL & AFFLIATIONS
        </h1>
        <div className=" justify-center flex">
          <div className="bg-white m-5 rounded-3xl shadow-lg ">
            <img
              className="w-64 m-5 border-black p-10"
              alt="pci_logo"
              src={pci_logo}
            />
            <h2 className="text-center text-2xl font-semibold -mt-10 pb-5">
              PCI
            </h2>
          </div>
          <div className="bg-white m-5 rounded-3xl shadow-lg ">
            <img className="w-64 m-5 h-64" alt="" src={bead_logo} />
            <h2 className="text-center font-semibold text-2xl -mt-10 pb-5">
              BEAD
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default McApproval;
