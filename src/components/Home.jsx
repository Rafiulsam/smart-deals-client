import Banner from "./Banner";
import LatestProducts from "./LatestProducts";

const latestProductsPromise = fetch(
  "http://localhost:3000/latest-products",
).then((response) => response.json());

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestProducts latestProducts={latestProductsPromise} />
    </div>
  );
};

export default Home;
