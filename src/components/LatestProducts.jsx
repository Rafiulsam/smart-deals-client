import { use } from "react";
import Product from "./Product";

const LatestProducts = ({ latestProducts }) => {
  const products = use(latestProducts);
  console.log(products);
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold text-center mt-10">
        Latest <span className="text-primary">Products</span>
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
