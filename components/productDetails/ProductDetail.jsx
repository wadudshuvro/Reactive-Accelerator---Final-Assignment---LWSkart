import connectMongo from "@/lib/connectDb";
import productModel from "@/schema/productModel";
import Image from "next/image";
import { Types } from "mongoose";
import { notFound } from "next/navigation";
import { FaFacebook, FaInstagram, FaStar, FaTwitter } from "react-icons/fa";
import AddToCartAndWishlist from "./AddToCartAndWishList";
import { auth } from "@/auth";
const ProductDetail = async ({ id }) => {
  const session = await auth();
  await connectMongo();
  const product = await productModel.findOne({ _id: new Types.ObjectId(id) });
  const {
    sku,
    image,
    name,
    price,
    discount_price,
    description,
    category,
    brand,
    reviewsNumber,
    ratings,
    availability,
  } = product;
  if (!product) {
    notFound();
  }

  const a = Array(Math.round(ratings)).fill(0);
  return (
    <div className="container grid grid-cols-2 gap-6">
      <div>
        <Image
          width={740}
          height={550}
          src={`${image[0] + "?pdID=" + id} `}
          alt={product?.name}
          className="w-full"
          quality={100}
        />
        <div className="grid grid-cols-5 gap-4 mt-4">
          {image.map((img, i) => (
            <Image
              key={i}
              width={133}
              height={100}
              src={i === 0 ? img + "?pdID=" + id : img + "?pdID=" + id + i}
              alt={name}
              className={`w-full cursor-pointer border ${
                i === 0 && "border-primary"
              }`}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-medium uppercase mb-2">{name}</h2>
        <div className="flex items-center mb-4">
          <div className="flex gap-1 text-sm text-yellow-400">
            {a.map((_, i) => (
              <span key={i}>
                <FaStar />
              </span>
            ))}
          </div>
          <div className="text-xs text-gray-500 ml-3">
            ({reviewsNumber} Reviews)
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-gray-800 font-semibold space-x-2">
            <span>Availability: </span>
            {availability ? (
              <span className="text-green-600">In Stock</span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </p>
          <p className="space-x-2">
            <span className="text-gray-800 font-semibold">Brand: </span>
            <span className="text-gray-600">{brand}</span>
          </p>
          <p className="space-x-2">
            <span className="text-gray-800 font-semibold">Category: </span>
            <span className="text-gray-600 capitalize">{category}</span>
          </p>
          <p className="space-x-2">
            <span className="text-gray-800 font-semibold">SKU: </span>
            <span className="text-gray-600 uppercase">{id.slice(10, 16)}</span>
          </p>
        </div>
        <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
          <p className="text-xl text-primary font-semibold">
            ${discount_price}
          </p>
          <p className="text-base text-gray-400 line-through">${price}</p>
        </div>
        <p className="mt-4 text-gray-600">{description}</p>

        <AddToCartAndWishlist session={session} product={{ id, sku }} />

        <div className="flex gap-3 mt-4">
          <a
            href="#"
            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
