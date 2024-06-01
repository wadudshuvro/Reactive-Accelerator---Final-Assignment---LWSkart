"use client";
import { useState } from "react";
import addToCart from "@/actions/addToCart";
import { BsBag } from "react-icons/bs";
const AddToCartAndWishlist = ({ session, product }) => {
  const [quantity, setQuantity] = useState(1);
  const cart = {
    email: session?.user?.email,
    item: {
      product: product.id,
      quantity,
    },
  };
  const cartHandler = async (e) => {
    e.preventDefault();
    await addToCart(cart);
  };
  return (
    <>
      <div className="mt-4">
        <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
          <button
            disabled={quantity === 1}
            onClick={() => setQuantity((prev) => prev - 1)}
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            min={1}
            max={product.sku}
            className="h-8 w-20 outline-none text-base px-2"
            readOnly
          />
          <button
            disabled={quantity === product.sku}
            onClick={() => setQuantity((prev) => prev + 1)}
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
          >
            +
          </button>
        </div>
      </div>

      <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
        <form onSubmit={cartHandler}>
          <button
            type="submit"
            className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
          >
            <BsBag /> Add to cart
          </button>
        </form>
        <a
          href="#"
          className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
        >
          <i className="fa-solid fa-heart"></i> Wishlist
        </a>
      </div>
    </>
  );
};

export default AddToCartAndWishlist;
