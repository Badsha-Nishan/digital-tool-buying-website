import React, { use } from "react";
import Cards from "./Cards";

const CardSection = ({ productCard, cart, setCart }) => {
  const cards = use(productCard);
  return (
    <div className="bg-base-100 w-11/12 mx-auto mb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => (
        <Cards key={card.id} card={card} cart={cart} setCart={setCart}></Cards>
      ))}
    </div>
  );
};

export default CardSection;
