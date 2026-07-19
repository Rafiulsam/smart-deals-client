import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12 mt-10">
      {/* Products info section*/}
      <div>
        <img
          className="max-w-full w-full h-auto lg:h-[500px] lg:w-[500px] rounded-md"
          src={product.image}
          alt={product.name}
        />
        {/* Product description */}
        <div className="mt-4 bg-base-200 p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Product Description</h2>
          <div className="flex gap-4 mb-3">
            <p>
              <span className="text-primary font-semibold">Condition:</span>{" "}
              {product.condition || "Not specified"}
            </p>
            <p>
              <span className="text-primary font-semibold">Usage Time:</span>{" "}
              {product.usage || "Not specified"}
            </p>
          </div>
          <hr />
          <p className="text-gray-400 mt-4">{product.description}</p>
        </div>
      </div>
      {/* Product details */}
      <div className="flex-1">
        <h2 className="text-5xl font-semibold mb-4">{product.title}</h2>
        <small className="custom-badge">{product.category}</small>
        <div className="mt-4 bg-base-200 p-4 rounded-md">
          <p className="text-2xl font-semibold text-green-500">
            ${product.price_min} - ${product.price_max}
          </p>
          <small>Price starts from</small>
        </div>
        <div className="mt-4 bg-base-200 p-4 rounded-md">
          <h4 className="text-xl font-semibold mb-4">Product Details</h4>
          <p>Product ID: {product._id || "Not specified"}</p>
          <p>Posted: {product.created_at || "Not specified"}</p>
        </div>
        <div className="mt-4 bg-base-200 p-4 rounded-md">
          <h4 className="text-xl font-semibold mb-6">Seller Information</h4>
          <div className="flex items-center gap-3 mb-3">
            <img
              className="w-12 h-12 rounded-full "
              src="https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg"
              alt={product.seller_name}
            />
            <div>
              <p> {product.seller_name}</p>
              <p className="text-sm text-muted-foreground text-gray-400">
                {product.email}
              </p>
            </div>
          </div>
          <p className="mb-2">location: {product.location}</p>
          <p className="mb-2">Contact: {product.seller_contact}</p>
          <p>
            Status:{" "}
            <small className="badge badge-warning">
              {product.status || "Not specified"}
            </small>
          </p>
        </div>
        <button className="btn btn-primary mt-6 w-full text-lg">
          I want to bid this product
        </button>
      </div>
      {/* Bids for the product */}
    </div>
  );
};

export default ProductDetails;
