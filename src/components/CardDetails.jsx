import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../Assets/images/slide-1.jpg";
import Img2 from "../Assets/images/slide-2.jpg";
import Img3 from "../Assets/images/slide-3.jpg";

import "../style/cardDetails.css";
import Navbar from "./Navbar";
export default function CardDetails() {
  const changeImage = (e) => {
    document.getElementById("productimg").src = e.target.src;
  };

  return (
    <>
      <Navbar />
      <div className="small-container single-product ">
        <div className="row details">
          <div className="col-8">
            <img
              src={Img1}
              style={{ padding: "10px", marginLeft: "4px", width: "100%" }}
              alt=""
              id="productimg"
            />
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
          </div>
          <div className="col-2">
            <h2>product details</h2>
            <p>discription</p>
            <h4>$50.00</h4>

            <input type="number" value="1" />
            <Link href="" className="btn my_btn">
              Add to Cart
            </Link>
            <h3>
              Product Details <i className="fa fa-indent"></i>
            </h3>
            <br />
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
    </>
  );
}
