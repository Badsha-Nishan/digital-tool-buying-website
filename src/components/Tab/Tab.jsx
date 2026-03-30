import React from "react";

const Tab = () => {
  return (
    <div className="mb-10">
      <div className="tabs tabs-box justify-center bg-white">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
          aria-label="Products"
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full"
          aria-label="Cart"
          defaultChecked
        />
      </div>
    </div>
  );
};

export default Tab;
