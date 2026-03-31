import React from "react";

const PriceCard = ({ card }) => {
  const {
    name,
    description,
    price,
    period,
    tag,
    tagType,
    buttonText,
    features,
    highlight,
  } = card;
  return (
    <div
      className={`card bg-base-200 ${
        tagType && "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
      } shadow-sm`}
    >
      <div className="card-body relative">
        <div
          className={`
            ${
              tag &&
              "badge bg-[#FEF3C6] text-[#BB4D00] p-4 rounded-full font-bold absolute -top-4 text-xs left-1/2 -translate-x-1/2 shadow-md"
            }
          `}
        >
          {tag}
        </div>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{name}</h2>
        </div>
        <div className="mb-5">
          <p>{description}</p>
        </div>
        <span className="text-xl">
          <span className="font-bold text-2xl">${price}</span>/{period}
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
            className={`btn rounded-full btn-primary btn-block ${
              tagType
                ? "bg-white text-[#4F39F6]"
                : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
            } `}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
