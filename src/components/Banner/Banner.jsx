import React from "react";
import BannerImg from "../../assets/Banner.png";
import { CiPlay1 } from "react-icons/ci";
import dotIcon from "../../assets/group.png";

const Banner = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse w-11/12 mx-auto items-center justify-center mt-26 gap-9">
      <div className="space-y-6">
        <div className="space-y-6">
          <span className="text-[#4F39F6] bg-[#E1E7FF] items-center gap-3 px-4 inline-flex rounded-full p-2">
            <img className="" src={dotIcon} /> New: AI-Powered Tools Available
          </span>
          <h2 className="text-2xl mt-5 md:text-7xl font-bold leading-20">
            Supercharge Your <br />{" "}
            <span className="text-[#4F39F6]">Digital Workflow</span>
          </h2>
          <p>
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>
        </div>
        <div>
          <a href="#products">
            <button className="btn mr-4 rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:from-[#9514FA] hover:to-[#4F39F6]">
              Explore Products
            </button>
          </a>
          <button className="btn btn-outline btn-primary rounded-full">
            <CiPlay1 />
            Watch Demo
          </button>
        </div>
      </div>
      <div className="hover-3d">
        <figure className="max-w-100 rounded-2xl">
          <img src={BannerImg} alt="Banner Image" />
        </figure>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Banner;
