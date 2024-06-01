"use client";
import addToCart from "@/actions/addToCart";

const AddToCartBTN = ({ session, pd }) => {
  const cart = {
    email: session?.user?.email,
    item: {
      product: pd,
      quantity: 1,
    },
  };
  const cartHandler = async (e) => {
    e.preventDefault();
    await addToCart(cart);
  };
  return (
    <form onSubmit={cartHandler} className="mt-auto" >
      <button
        disabled={!session?.user}
        type="submit"
        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition cursor-pointer "
      >
        Add to cart
      </button>
    </form>
  );
};

export default AddToCartBTN;
