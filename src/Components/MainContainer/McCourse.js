import React from "react";
import ph_student from "../../Images/ph_students.jpg";
import ph_mcStudent from "../../Images/st_img.jpg";
const McCourse = () => {
  return (
    <>
      <div className=" bg-black h-[32rem]">
        <img
          className=" absolute w-screen  h-[32rem] opacity-20"
          alt="ph_student"
          src={ph_student}
        />
        <h1 className="text-white text-center pt-10 font-bold text-3xl">
          COURSES
        </h1>
        <div className=" border-red-500 flex justify-center mt-10  ">
          <div className="relative">
            <img
              className="w-96 rounded-lg ransform transition-all duration-300 hover:scale-110"
              alt=""
              src={ph_mcStudent}
            />
            <p className="text-black  w-full rounded-bl-lg -mt-5 ml-[12rem] font-semibold text-2xl absolute   transform -translate-x-1/2 -translate-y-1/2 py-1 px-2 bg-white ">
              Diploma in pharmacy (2 years)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default McCourse;
