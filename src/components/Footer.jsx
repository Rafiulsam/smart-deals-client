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
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
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
