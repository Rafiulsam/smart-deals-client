import { use, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProductDetails = () => {
  const {
    image,
    name,
    condition,
    usage,
    description,
    title,
    category,
    price_min,
    price_max,
    _id,
    created_at,
    seller_name,
    email,
    location,
    seller_contact,
    status,
  } = useLoaderData();
  const modalRef = useRef(null);
  const { user } = use(AuthContext);

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const bid = form.bid.value;
    const name = form.name.value;
    const email = form.email.value;

    const newBid = {
      productId: _id,
      buyerName: name,
      buyerEmail: email,
      bidAmount: bid,
      status: "pending",
    };
    console.log(newBid);
    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Optionally, update the UI or show a success message
      })
      .catch((error) => {
        console.error("Error:", error);
        // Optionally, show an error message
      });
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12 mt-10 mb-16">
      {/* Products info section*/}
      <div>
        <img
          className="max-w-full w-full h-auto lg:h-125 lg:w-125 rounded-md"
          src={image}
          alt={name}
        />
        {/* Product description */}
        <div className="mt-4 bg-base-200 p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Product Description</h2>
          <div className="flex gap-4 mb-3">
            <p>
              <span className="text-primary font-semibold">Condition:</span>{" "}
              {condition || "Not specified"}
            </p>
            <p>
              <span className="text-primary font-semibold">Usage Time:</span>{" "}
              {usage || "Not specified"}
            </p>
          </div>
          <hr />
          <p className="text-gray-400 mt-4">{description}</p>
        </div>
      </div>
      {/* Product details */}
      <div className="flex-1">
        <h2 className="text-5xl font-semibold mb-4">{title}</h2>
        <small className="custom-badge">{category}</small>
        <div className="mt-4 bg-base-200 p-4 rounded-md">
          <p className="text-2xl font-semibold text-green-500">
            ${price_min} - ${price_max}
          </p>
          <small>Price starts from</small>
        </div>
        <div className="mt-4 bg-base-200 p-4 rounded-md">
          <h4 className="text-xl font-semibold mb-4">Product Details</h4>
          <p>Product ID: {_id || "Not specified"}</p>
          <p>Posted: {created_at || "Not specified"}</p>
        </div>
        <div className="mt-4 bg-base-200 p-4 rounded-md">
          <h4 className="text-xl font-semibold mb-6">Seller Information</h4>
          <div className="flex items-center gap-3 mb-3">
            <img
              className="w-12 h-12 rounded-full "
              src="https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg"
              alt={seller_name}
            />
            <div>
              <p> {seller_name}</p>
              <p className="text-sm text-muted-foreground text-gray-400">
                {email}
              </p>
            </div>
          </div>
          <p className="mb-2">location: {location}</p>
          <p className="mb-2">Contact: {seller_contact}</p>
          <p>
            Status:{" "}
            <small className="badge badge-warning">
              {status || "Not specified"}
            </small>
          </p>
        </div>
        <button
          onClick={() => modalRef.current.showModal()}
          className="btn btn-primary mt-6 w-full text-lg"
        >
          I want to bid this product
        </button>
        {/* Modal */}
        <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">
              Give Seller Your Offered Price
            </h3>
            <form onSubmit={handleBidSubmit} className="mt-4">
              <fieldset className="fieldset">
                <div className="flex gap-4">
                  {/* name */}
                  <div>
                    <label className="label">Name</label>
                    <input
                      type="name"
                      name="name"
                      className="input"
                      readOnly
                      defaultValue={user?.displayName}
                    />
                  </div>
                  {/* email */}
                  <div>
                    <label className="label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="input"
                      readOnly
                      defaultValue={user?.email}
                    />
                  </div>
                </div>
                {/* bid */}
                <label className="label">Bid</label>
                <input
                  type="text"
                  name="bid"
                  className="input w-full"
                  placeholder="Offered Price"
                />
                <button className="btn btn-primary mt-4">Place your bid</button>
              </fieldset>
            </form>
            <div className="modal-action">
              <form method="dialog">
                {/* modal close button */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      {/* Bids for the product */}
    </div>
  );
};

export default ProductDetails;
