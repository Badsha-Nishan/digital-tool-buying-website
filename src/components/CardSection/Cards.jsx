import React, { useState } from "react";

const Cards = ({ card, cart, setCart, notify }) => {
  const { name, description, price, tag, period, tagType, features, icon } =
    card;
  const [selectProduct, setSelectProduct] = useState(false);

  const handleBuy = () => {
    notify()
    setSelectProduct(true);
    setCart([...cart, card]);
  };
  return (
    <div className="card bg-base-200 shadow-sm ">
      <div className="card-body relative">
        <span
          className={
            tagType === "best-seller"
              ? "badge badge-xs bg-[#FEF3C6] absolute text-[#BB4D00] top-2 text-sm p-3 rounded-full right-2"
              : tagType === "new"
              ? "badge badge-xs bg-[#DBFCE7] text-[#0A883E] absolute top-2 text-sm p-3 rounded-full right-2"
              : "badge badge-xs bg-[#E1E7FF] text-[#4F39F6] absolute top-2 text-sm p-3 rounded-full right-2"
          }
        >
          {tag}
        </span>
        <div className="border rounded-full border-gray-300 p-3 w-14 flex justify-center items-center">
          <img src={`/icons/${icon}`} />
        </div>
        <div className="flex justify-between mt-5">
          <h2 className="text-3xl font-bold">{name}</h2>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <span className="text-xl">
          <span className="font-bold">${price}</span>/{period}
        </span>
        <ul className="mt-6 flex flex-1 flex-col gap-2 text-xs">
          {features.map((feature, index) => (
            <li key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button
            type="button"
            onClick={handleBuy}
            className={`btn ${
              selectProduct
                ? "bg-green-500 border-none"
                : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
            } rounded-full btn-primary btn-block `}
          >
            {selectProduct ? "✅ Added to Cart!" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
