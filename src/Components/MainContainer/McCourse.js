import React from "react";
import ph_student from "../../Images/ph_students.jpg";
import ph_mcStudent from "../../Images/st_img.jpg";
const McCourse = () => {
  return (
    <>
      <div className=" bg-black h-[28rem]">
        <img
          className=" absolute w-screen  h-[28rem] opacity-20"
          alt="ph_student"
          src={ph_student}
        />
        <h1 className="text-white text-center pt-10 font-bold text-3xl">
          COURSES
        </h1>
        <div className=" border-red-500 flex justify-center mt-10  ">
          <div className="relative">
            <img
              className="w-60 md:w-96 rounded-lg  md:hover:scale-110 duration-500"
              alt=""
              src={ph_mcStudent}
            />
            <p className="w-full rounded-br-lg rounded-bl-lg md:w-full text-black ml-[120px]  md:-mt-5 md:ml-[12rem] font-semibold md:text-2xl absolute   md:transform -translate-x-1/2 -translate-y-1/2 py-1 px-2 bg-white ">
              Diploma in pharmacy (2 years)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default McCourse;
