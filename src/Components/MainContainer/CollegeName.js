import React from "react";

const CollegeName = () => {
  return (
    <>
      <div className="  w-[40%] ">
        <h1 className="mt-30  font-bold text-4xl text-center pl-6 px-3 py-5 text-gray-800 ">
          VEERBHADRESHWAR COLLEGE OF PHARMACY
        </h1>
        <div className=" px-5">
          <div className=" m-2 my-8">
            <h1 className="bg-gray-200 border rounded-r-2xl text-gray-800 text-lg font-bold pl-3 ">
              Vision
            </h1>
            <p className="pl-3 mt-2">
              Dedicated to advancing the institute as a beacon of excellence.
            </p>
          </div>
          <div className=" m-2 my-12">
            <h1 className="bg-gray-200 border text-lg font-bold rounded-r-2xl text-gray-800 pl-3 ">
              Mission
            </h1>
            <p className="pl-3 mt-2">
              To provide quality education, training and research in
              pharmaceutical sciences to meet the needs of students,
              pharmacists, pharmaceutical organisations, and health care
              professionals.
            </p>
          </div>
          <div className=" m-2 my-12">
            <h1 className="bg-gray-200 border text-lg font-bold pl-3 rounded-r-2xl text-gray-800 ">
              Objectives
            </h1>

            <ul className="pl-2 mt-2">
              <li className="flex">
                <p className="pr-1">➡️</p>
                To cultivate proficient pharmacists equipped with
                entrepreneurial and innovative abilities.
              </li>
              <li className="flex">
                <p className="pr-1">➡️</p>
                To provide education on drugs, pharmaceutical products, health,
                and population management
              </li>
              <li className="flex">
                <p className="pr-1">➡️</p>
                To establish a model pharmacy within the institution to enhance
                the connection between the public and the field of pharmacy.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollegeName;
