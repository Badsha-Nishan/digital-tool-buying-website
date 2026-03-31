import React from "react";
import CartLogo from "../../assets/cart.png";

const EmptyCart = ({ setSelectTab }) => {
  return (
    <div className="w-11/12 mx-auto text-center flex-col bg-[rgb(225,231,255)] rounded-lg p-20 flex justify-center items-center space-y-3">
      <div className=" max-w-24">
        <img src={CartLogo} />
      </div>
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
