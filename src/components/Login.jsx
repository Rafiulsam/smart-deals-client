import { Link } from "react-router-dom";
import GoogleSignUp from "./GoogleSignUp";

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 max-w-lg w-full shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center lg:mb-3 lg:px-10">
              Login now
            </h1>
            <p className="text-center lg:mb-4 text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="link link-hover text-primary">
                Register
              </Link>
            </p>

            <fieldset className="fieldset">
              <label className="label ">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />

              <button className="btn btn-primary mt-4">Login</button>
            </fieldset>
            <div className="divider">OR</div>
            <GoogleSignUp></GoogleSignUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
