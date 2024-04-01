import React from "react";

const HomeShimmer = () => {
  return (
    <div>
      <div>
        <div className="h-20 bg-gray-200 w-full"></div>
      </div>
      <div className=" border w-full h-[28rem] flex ">
        <div className=" flex justify-center items-center w-[60%] ">
          <div className="  ml-10 mt-20 w-[38rem] h-60">
            <p className="bg-gray-200 rounded-2xl h-16 w-[38rem] my-2"></p>
            <p className="bg-gray-200 rounded-2xl h-16 w-[18rem] my-2"></p>
            <p className="bg-gray-200 rounded-2xl h-16 w-[18rem] my-2"></p>
          </div>
        </div>
        <div className=" flex pl-10 pt-20 w-[40%] ">
          <div className="  bg-gray-300 rounded-lg h-80 w-[30rem]"></div>
        </div>
      </div>
      <div className="h-52 w-full bg-gray-200"></div>
    </div>
  );
};

export default HomeShimmer;
