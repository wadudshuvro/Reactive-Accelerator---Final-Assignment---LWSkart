import Description from "@/components/productDetails/Description";
import ProductDetail from "@/components/productDetails/ProductDetail";
import RelatedProduct from "@/components/productDetails/RelatedProduct";
import BreadCrumb from "@/components/shared/BreadCrumb";

const ProductDetailsPage = ({ params : { id }}) => {
  return (
    <>
      <BreadCrumb />
      <ProductDetail id={id} />
      <Description id={id} />
      <RelatedProduct id={id} />
    </>
  );
};

export default ProductDetailsPage;
