import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const FooterContent = () => {
  return (
    <div className="flex flex-col items-center justify-center p-24 text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      <SectionTitle
        title="Ready to Transform Your Workflow?"
        description={
          <p>
            Join thousands of professionals who are already using Digitools to
            work smarter. Start your free trial today.
          </p>
        }
      ></SectionTitle>
      <div className="flex ">
        <button className="btn mr-4 rounded-full text-black hover:text-white bg-base-100 btn-ghost hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA] ">
          Explore Products
        </button>
        <button className="btn btn-outline rounded-full">View Pricing</button>
      </div>
      <p className="mt-5">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  );
};

export default FooterContent;
