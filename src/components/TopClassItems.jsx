import React from "react";
import { Link } from "react-router-dom";
import img from "../Assets/images/slide-1.jpg";
// import CardDetails from "./CardDetails";
import "../style/p_items.css";
export default function TopClassItems() {
  return (
    <>
      <div className="test">
        <div class="container my-3">
          <div class="row">
            <div class="col-md-12 my-3">
              <div class="heading mx-auto text-center my-3 ">
                <h1>Top Class Items</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="container ">
          <div class="row mx-auto">
            <div class="col-md-3 ">
              <div class="card mx-auto my-3" style={{ width: "18rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5
                    class="card-title
                  "
                  >
                    Card title
                  </h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/CardDetails" class="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card mx-auto my-3" style={{ width: "18rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5
                    class="card-title
                  "
                  >
                    Card title
                  </h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/CardDetails" class="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card mx-auto my-3" style={{ width: "18rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5
                    class="card-title
                  "
                  >
                    Card title
                  </h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/CardDetails" class="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card mx-auto my-3" style={{ width: "18rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5
                    class="card-title
                  "
                  >
                    Card title
                  </h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/CardDetails" class="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
