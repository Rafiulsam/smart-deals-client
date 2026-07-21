import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const AllProducts = () => {
  const products = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <h1 className="text-5xl font-semibold mt-20 mb-10 text-center">
        All <span className="text-primary">Products</span>
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
