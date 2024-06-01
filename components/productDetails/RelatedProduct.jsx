import connectMongo from "@/lib/connectDb";
import ProductCard from "../shared/ProductCard";
import productModel from "@/schema/productModel";
import { Types } from "mongoose";
const RelatedProduct = async ({ id }) => {
  await connectMongo();
  const product = await productModel.findById(new Types.ObjectId(id));
  const categoryProducts = await productModel
    .find({
      category: product.category,
    })
    .limit(8);

  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        Related products
      </h2>
      <div className="grid grid-cols-4 gap-6">
        {categoryProducts.map((product) => (
          <ProductCard key={product._id} product={product} id={product._id} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
