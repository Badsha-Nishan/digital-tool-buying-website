import React from "react";
import BannerImg from "../../assets/Banner.png";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse w-11/12 mx-auto items-center justify-center mt-16 gap-9">
      <div className="space-y-6">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-7xl font-bold">
            Supercharge Your <br /> Digital Workflow
          </h2>
          <p>
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>
        </div>
        <div>
          <button className="btn mr-4 rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            Explore Products
          </button>
          <button className="btn btn-outline btn-primary rounded-full">
            <CiPlay1 />
            Watch Demo
          </button>
        </div>
      </div>
      <div>
        <img src={BannerImg} alt="Banner Image" />
      </div>
    </div>
  );
};

export default Banner;
