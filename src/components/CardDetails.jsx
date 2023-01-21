import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../Assets/images/slide-1.jpg";
import Img2 from "../Assets/images/slide-2.jpg";
import Img3 from "../Assets/images/slide-3.jpg";

import "../style/cardDetails.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function CardDetails() {
  const changeImage = (e) => {
    document.getElementById("productimg").src = e.target.src;
  };

  const add = () => {
    let value = document.querySelector("input").value;
    value++;
    document.querySelector("input").value = value;
  };
  const subtract = () => {
    let value = document.querySelector("input").value;
    if (value <= 0) {
      return;
    }
    value--;
    document.querySelector("input").value = value;
  };

  return (
    <>
      <Navbar bg1={true} bg2={true} />
      <div className="container single-product ">
        <div className="row details">
          <div className="col-6 ">
            <img
              src={Img1}
              className="col-6 "
              // style={{ padding: "10px", marginLeft: "4px", width: "100%" }}
              alt=""
              id="productimg"
            />
          </div>
          <div className="col-6 product-details">
            <h2>Product details</h2>
            <p>
              <strike>MRP ₹ 330.00</strike>{" "}
              <span>
                <b>-15%</b>
              </span>
            </p>
            <h4>MRP ₹ 330.00</h4>
            <p>(incl. of all taxes) </p>
            {/* write a code for quantity  */}

            <div className="quantity">
              <span>Quantity</span>
              <div className="quantity-btn">
                <span className="minus-btn">
                  <i className="fa fa-minus" onClick={subtract}></i>
                </span>
                <input type="text" value="1" />
                <span className="plus-btn">
                  <i class="fa fa-plus" aria-hidden="true" onClick={add}></i>
                  {/* <i className="fa fa-plus"></i> */}
                </span>
              </div>
            </div>
            <br />

            <Link href="" className="btn my_btn">
              Add to Cart
            </Link>
            <br />
            <p className="title_for_items">Frequently Bought Bundle</p>
            <div className="small-img-row ">
              <div className="small-img-col ">
                <img
                  className="small-img"
                  onClick={changeImage}
                  src={Img1}
                  alt=""
                />
              </div>
              <div className="small-img-col">
                <img
                  className="small-img"
                  onClick={changeImage}
                  src={Img2}
                  alt=""
                />
              </div>
              <div className="small-img-col">
                <img
                  className="small-img"
                  onClick={changeImage}
                  src={Img3}
                  alt=""
                />
              </div>
            </div>
            <h3>
              Product Details <i className="fa fa-indent"></i>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptatum, quia, voluptas quas voluptates quibusdam
              voluptatibus quae quidem quos nesciunt. Quisquam, quae. Quisquam
              quod, voluptatum, quia, voluptas quas voluptates quibusdam
            </p>
          </div>
        </div>
        <div className="small-container">
          <div className="row row-2">
            <h2>Related Products</h2>
            <p>View More</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
