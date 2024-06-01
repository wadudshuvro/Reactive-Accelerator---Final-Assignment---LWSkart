import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaStar } from "react-icons/fa";
import AddToCartBTN from "./AddToCartBTN";
import AddToWishList from "./AddToWishList";

const ProductCard = async ({ product }) => {
  const { _id, name, image, price, discount_price, ratings } = product;
  const rating = Array(Math.round(ratings)).fill(0);
  const session = await auth();

  return (
    <div className="bg-white shadow rounded overflow-hidden group flex flex-col">
      <div className="relative">
        <Image
          width={365}
          height={250}
          src={`${image[0] + "&" + _id}`}
          alt={name}
          className="w-full"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
          justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
        >
          <Link
            href={`/product/${_id}`}
            className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="view product"
          >
            <FaSearch />
          </Link>
          <AddToWishList session={session} pd={_id.toString()} />
        </div>
      </div>
      <div className="pt-4 pb-3 px-4 ">
        <Link href={`/product/${_id}`}>
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            {name}
          </h4>
        </Link>

        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">${price}</p>
          <p className="text-sm text-gray-400 line-through">
            ${discount_price}
          </p>
        </div>

        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            {rating.map((_, idx) => (
              <span key={idx}>
                <FaStar />
              </span>
            ))}
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      <AddToCartBTN session={session} pd={_id.toString()} />
    </div>
  );
};

export default ProductCard;
