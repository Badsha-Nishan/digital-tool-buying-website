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
    <div className="card bg-base-200 shadow-sm ">
      <div className="card-body relative">
        <span
          className={
            tag && "badge badge-xs badge-warning absolute -top-2 right-36"
          }
        >
          {tag}
        </span>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{name}</h2>
          <span className="text-xl">
            ${price}/{period}
          </span>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <ul className="mt-6 flex flex-1 flex flex-col gap-2 text-xs">
          {features.map((feature) => (
            <li>
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
          <button className="btn rounded-full btn-primary btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
