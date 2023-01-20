import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <div>
      <Navbar />
      <div className="container " style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">Login here</h3>

                <form>
                  <div className="form-group my-2">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary my-3">
                    Submit
                  </button>
                  <p className="text-muted">
                    Don't have an account?{" "}
                    <Link to="/register" style={{ color: "blue" }}>
                      Sign Up
                    </Link>
                  </p>
                  {/* create an account  */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
