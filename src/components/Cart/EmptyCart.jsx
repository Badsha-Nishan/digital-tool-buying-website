import React from "react";

const EmptyCart = ({ setSelectTab }) => {
  return (
    <div className="w-11/12 mx-auto bg-[#E1E7FF] rounded-lg p-20 text-center space-y-3">
      <h2 className="font-bold text-4xl text-red-300">Your Cart is Empty</h2>
      <p>Add some product to get started</p>
      <button
        onClick={() => setSelectTab("products")}
        className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
      >
        Back to Products
      </button>
    </div>
  );
};

export default EmptyCart;
