import React, { use } from "react";
import PriceCard from "./PriceCard";


const PricingCard = ({cardPromise}) => {
    const card = use(cardPromise)
  return (
    <div className="bg-base-100 w-11/12 mx-auto mb-24 grid grid-cols-3 gap-6">
        {
            card.map(card=><PriceCard key={card.id} card={card}></PriceCard>)
        }
      
    </div>
  );
};

export default PricingCard;
