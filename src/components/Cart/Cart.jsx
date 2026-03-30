import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="w-11/12 mx-auto p-5 bg-base-200 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <div className="">
            <div className="flex justify-between items-center border rounded-lg p-5 mb-2 bg-base-100">
              <div className="flex items-center gap-3">
                <div>
                  <img src={`/icons/${item.icon}`} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{item.name}</h2>
                  <p>${item.price}</p>
                </div>
              </div>
              <div>
                <button className="text-red-500 font-bold btn">Remove</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
