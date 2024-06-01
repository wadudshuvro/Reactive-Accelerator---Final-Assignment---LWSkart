import connectMongo from "@/lib/connectDb";
import ProductCard from "../shared/ProductCard";
import productModel from "@/schema/productModel";

const Product = async () => {
  await connectMongo();
  const products = await productModel
    .find({})
    .sort({ soldCounts: -1 })
    .limit(8);
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        TRENDING PRODUCTS
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} id={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Product;
