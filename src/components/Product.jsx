import { Link } from "react-router-dom";

const Product = ({ product }) => {
  console.log(product);

  const { _id, title, price_min, price_max } = product;
  return (
    <div className="card bg-base-200 shadow-sm">
      <figure className="p-4">
        <img
          src={product.image}
          alt={title}
          className="rounded-xl h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="font-semibold">
          Price: ${price_min} - ${price_max}
        </p>
        <div className="card-actions">
          <Link
            className="btn btn-outline w-full "
            to={`/product-details/${_id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
