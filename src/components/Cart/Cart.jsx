import React from "react";

const Cart = ({ cart, setCart, remove, notify1 }) => {
  const handleRemove = (cart, item) => {
    remove();
    const filteredCart = cart.filter((items) => items.name !== item.name);
    setCart(filteredCart);
  };
  return (
    <div className="w-11/12 mx-auto p-5 bg-base-200 rounded-lg space-y-3">
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
                <button
                  onClick={() => handleRemove(cart, item)}
                  className="text-red-500 font-bold btn"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-between text-2xl font-bold">
        <div>
          <p>Total:</p>
        </div>
        <div>${cart.reduce((total, el) => total + el.price, 0).toFixed(2)}</div>
      </div>
      <button
        onClick={() => {
          setCart([]);
          notify1();
        }}
        className="btn w-full rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
