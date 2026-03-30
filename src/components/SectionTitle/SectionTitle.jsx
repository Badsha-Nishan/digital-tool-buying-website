import React from "react";

const SectionTitle = ({ title, description }) => {
  return (
    <div className="w-11/12 mx-auto text-center space-y-5 mb-9">
      <h2 className="text-5xl font-bold">{title}</h2>
      {description}
    </div>
  );
};

export default SectionTitle;
