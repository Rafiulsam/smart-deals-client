const Banner = () => {
  return (
    <div
      style={{ backgroundImage: "url('background.webp')" }}
      className="bg-cover bg-center py-20"
    >
      <h1 className="text-6xl font-bold text-center mt-10">
        Deal Your <span className="text-primary">Products</span> <br></br>In A{" "}
        <span className="text-primary">Smart</span> Way
      </h1>
      <p className="text-center mt-4 text-lg">
        SmartDeals helps you sell, resell, and shop from trusted local sellers —
        all in one place!
      </p>
      <div className="flex justify-center mt-6">
        <label className="input rounded-l-full ">
          <input type="search" placeholder="Search for the product category" />
        </label>
        <button className="btn-primary rounded-r-full flex items-center gap-2 cursor-pointer">
          {" "}
          <svg
            className="h-[1em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
        </button>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button className="btn btn-primary">Watch all products</button>
        <button className="btn btn-outline">Post a Product</button>
      </div>
    </div>
  );
};

export default Banner;
