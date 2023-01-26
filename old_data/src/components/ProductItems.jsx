import React from "react";
import Navbar from "./Navbar";
import "../style/ProductItems.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
export default function ProductItems(props) {
  const fillstar = (e) => {
    e.target.style.color = "yellow";
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="container pitems">
        <div className="row">
          <div className="col-md-4 tcards ">
            <div className="card border-0 my-3">
              <Link to="/CardDetails">
                <img src={props.Bg} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body g_body text-center">
                <p>product info</p>
                <div className="container my-2">
                  <i className="far fa-star" style={{ color: "black" }}></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                </div>
                <h5>
                  <strike>MRP ₹ 23</strike> <span>-15%</span>
                </h5>
                <a href="/" className="btn btn-primary">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 tcards ">
            <div className="card border-0 my-3">
              <Link to="/CardDetails">
                <img src={props.Bg} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body g_body text-center">
                <p>product info</p>
                <div className="container my-2">
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                </div>
                <h5>
                  <strike>MRP ₹ 23</strike> <span>-15%</span>
                </h5>
                <a href="/" className="btn btn-primary">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 tcards ">
            <div className="card border-0 my-3">
              <Link to="/CardDetails">
                <img src={props.Bg} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body g_body text-center">
                <p>product info</p>
                <div className="container my-2">
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                </div>
                <h5>
                  <strike>MRP ₹ 23</strike> <span>-15%</span>
                </h5>
                <a href="/" className="btn btn-primary">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 tcards ">
            <div className="card border-0 my-3">
              <Link to="/CardDetails">
                <img src={props.Bg} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body g_body text-center">
                <p>product info</p>
                <div className="container my-2">
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                </div>
                <h5>
                  <strike>MRP ₹ 23</strike> <span>-15%</span>
                </h5>
                <a href="/" className="btn btn-primary">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 tcards ">
            <div className="card border-0 my-3">
              <Link to="/CardDetails">
                <img src={props.Bg} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body g_body text-center">
                <p>product info</p>
                <div className="container my-2">
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                </div>
                <h5>
                  <strike>MRP ₹ 23</strike> <span>-15%</span>
                </h5>
                <a href="/" className="btn btn-primary">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 tcards ">
            <div className="card border-0 my-3">
              <Link to="/CardDetails">
                <img src={props.Bg} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body g_body text-center">
                <p>product info</p>
                <div className="container my-2">
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                </div>
                <h5>
                  <strike>MRP ₹ 23</strike> <span>-15%</span>
                </h5>
                <a href="/" className="btn btn-primary">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 tcards ">
            <div className="card border-0 my-3">
              <Link to="/CardDetails">
                <img src={props.Bg} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body g_body text-center">
                <p>product info</p>
                <div className="container my-2">
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                </div>
                <h5>
                  <strike>MRP ₹ 23</strike> <span>-15%</span>
                </h5>
                <a href="/" className="btn btn-primary">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 tcards ">
            <div className="card border-0 my-3">
              <Link to="/CardDetails">
                <img src={props.Bg} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body g_body text-center">
                <p>product info</p>
                <div className="container my-2">
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                </div>
                <h5>
                  <strike>MRP ₹ 23</strike> <span>-15%</span>
                </h5>
                <a href="/" className="btn btn-primary">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 tcards ">
            <div className="card border-0 my-3">
              <Link to="/CardDetails">
                <img src={props.Bg} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body g_body text-center">
                <p>product info</p>
                <div className="container my-2">
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                  <i
                    className="far fa-star"
                    onclick={fillstar}
                    style={{ color: "black", cursor: "pointer" }}
                  ></i>
                </div>
                <h5>
                  <strike>MRP ₹ 23</strike> <span>-15%</span>
                </h5>
                <a href="/" className="btn btn-primary">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
