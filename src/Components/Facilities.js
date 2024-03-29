import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ph_student from "../Images/ph_students.jpg";
import { facility } from "../Utils/Constants";
const Facilities = () => {
  return (
    <div>
      <Header />
      <div className="">
        <h1 className="text-3xl text-center font-semibold py-5">FACILITIES</h1>
        <div className="w-full flex flex-wrap justify-center mb-5">
          {facility.map((f) => (
            <div className="border rounded-lg bg-gray-200 m-2 text-black">
              <img className="w-96 m-2" alt="student_pc" src={ph_student} />
              <h2 className="text-center py-1 font-semibold">{f}</h2>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Facilities;
