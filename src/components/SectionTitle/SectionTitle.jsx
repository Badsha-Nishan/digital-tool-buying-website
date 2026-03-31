import React from "react";

const SectionTitle = ({ title, description }) => {
  return (
    <div className="w-11/12 mx-auto text-center space-y-5 mt-12 mb-12">
      <h2 className="text-3xl lg:text-5xl font-bold">{title}</h2>
      {description}
    </div>
  );
};

export default SectionTitle;
