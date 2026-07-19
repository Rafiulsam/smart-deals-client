import { Link } from "react-router-dom";
import GoogleSignUp from "./GoogleSignUp";

const Register = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center lg:mb-3 lg:px-5">
              Register now!
            </h1>
            <p className="text-center lg:mb-4 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="link link-hover text-primary">
                Login
              </Link>
            </p>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" className="input w-full" placeholder="Name" />
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
              />
              <label className="label">Confirm Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Confirm Password"
              />
              <button className="btn btn-primary mt-4">Register</button>
            </fieldset>
            <div className="divider">OR</div>
            <GoogleSignUp></GoogleSignUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
