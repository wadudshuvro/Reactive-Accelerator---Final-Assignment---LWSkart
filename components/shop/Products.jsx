import ProductCard from "../shared/ProductCard";
import connectMongo from "@/lib/connectDb";
import productModel from "@/schema/productModel";
const Products = async ({ searchParams={} }) => {
  await connectMongo();
  let data = [];
  let query = {};
  if (searchParams?.category) {
    query.category = { $in: searchParams.category.split(",") };
  }
  if (searchParams?.minPrice || searchParams?.maxPrice) {
    query.price = {};
    if (searchParams?.minPrice) {
      query.price.$gte = searchParams.minPrice;
    }
    if (searchParams?.maxPrice) {
      query.price.$lte = searchParams.maxPrice;
    }
  }
  data = await productModel.find(query);
  return (
    <div className="col-span-3">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
        {data?.map((product, idx) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
