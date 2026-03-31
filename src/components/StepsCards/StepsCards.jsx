import React from "react";
import UserIcon from "../../assets/user.png";
import Package from "../../assets/package.png";
import RocketIcon from "../../assets/rocket.png";

const StepsCards = () => {
  return (
    <div id="getCard" className="bg-base-200 p-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="card bg-base-100 w-11/12 mx-auto shadow-sm py-16 flex justify-center items-center">
        <div className="badge badge-primary absolute top-5 right-5 rounded-full w-12 h-12 text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          01
        </div>
        <div className="rounded-full w-24 p-5 mt-6 bg-[#9514FA20]">
          <img src={UserIcon} alt="User Icon" className="rounded-xl" />
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">Create Account</h2>
          <p>
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 w-11/12 mx-auto shadow-sm py-16 flex justify-center items-center">
        <div className="badge badge-primary absolute top-5 right-5 rounded-full w-12 h-12 text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          02
        </div>
        <div className="rounded-full w-24 p-5 mt-6 bg-[#9514FA20]">
          <img src={Package} alt="Package Icon" className="rounded-xl" />
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">Choose Products</h2>
          <p>Browse our catalog and select the toolsthat fit your needs.</p>
        </div>
      </div>
      <div className="card bg-base-100 w-11/12 mx-auto shadow-sm py-16 flex justify-center items-center">
        <div className="badge badge-primary absolute top-5 right-5 rounded-full w-12 h-12 text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          03
        </div>
        <div className="rounded-full w-24 p-5 mt-6 bg-[#9514FA20]">
          <img src={RocketIcon} alt="Rocket Icon" className="rounded-xl " />
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">Start Creating</h2>
          <p>Download and start using your premium tools immediately.</p>
        </div>
      </div>
    </div>
  );
};

export default StepsCards;
