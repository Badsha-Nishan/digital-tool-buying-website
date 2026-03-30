import React from "react";

const Rating = () => {
  return (
    <div className=" text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-11 mt-12">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-center  text-center">
        <div className="border-r-2 border-gray-400 md:pr-24">
          <h2 className="text-6xl">50K+</h2>
          <p className="text-2xl">Active Users</p>
        </div>
        <div className="border-r-2 border-gray-400 md:pr-24 md:pl-24">
          <h2 className="text-6xl">200+</h2>
          <p className="text-2xl">Premium Tools</p>
        </div>
        <div className="md:pl-24">
          <h2 className="text-6xl">4.9</h2>
          <p className="text-2xl">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
