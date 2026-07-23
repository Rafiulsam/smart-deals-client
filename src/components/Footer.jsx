import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-[#070B1D] text-base-content p-10">
        <aside>
          <NavLink to="/" className="text-xl font-semibold">
            Smart<span className="text-primary">Deals</span>
          </NavLink>
          <p>
            Your trusted marketplace for authentic local products.
            <br />
            Discover the best deals from across Bangladesh.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <NavLink to="/all-products" className="link link-hover">
            All Products
          </NavLink>
          <NavLink to="/dashboard" className="link link-hover">
            Dashboard
          </NavLink>
          <NavLink to="/login" className="link link-hover">
            Login
          </NavLink>
          <NavLink to="/register" className="link link-hover">
            Register
          </NavLink>
        </nav>
        <nav>
          <h6 className="footer-title">Categories</h6>
          <a className="link link-hover">Electronic</a>
          <a className="link link-hover">Fashion</a>
          <a className="link link-hover">Home & Living</a>
          <a className="link link-hover">Furniture</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <div className="flex gap-4 text-2xl">
            <a>
              {" "}
              <FaSquareXTwitter />{" "}
            </a>
            <a>
              {" "}
              <FaLinkedin />{" "}
            </a>
            <a>
              {" "}
              <FaFacebook />{" "}
            </a>
          </div>
        </nav>
      </footer>

      <footer className="footer sm:footer-horizontal footer-center bg-[#070B1D] text-base-content p-4 border-t border-base-300">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Smart
            Deals Ltd
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
