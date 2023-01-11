import React from "react";
import { Link } from "react-router-dom";
import img from "../Assets/images/slide-1.jpg";
// import CardDetails from "./CardDetails";
import "../style/p_items.css";
export default function TopClassItems() {
  return (
    <>
      <div className="test">
        <div class="container my-4">
          <div class="row">
            <div class="col-md-12 my-3">
              <div class="heading mx-auto text-center my-3 ">
                <h1>Top Class Items</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid ">
          <div className="container-fluid mx-3">
            <div class="row mx-auto">
              <div class="col-md-3 my-2">
                <div class="card  card_size ">
                  <Link to="/CardDetails">
                    <img src={img} class="card-img-top" alt="..." />
                  </Link>
                  <div class="card-body">
                    <h5
                      class="card-title
                            "
                    >
                      Card title
                    </h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link href="#" class="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-md-3 my-2">
                <div class="card card_size">
                  <Link to="/CardDetails">
                    <img src={img} class="card-img-top" alt="..." />
                  </Link>
                  <div class="card-body">
                    <h5
                      class="card-title
                            "
                    >
                      Card title
                    </h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link href="#" class="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-md-3 my-2">
                <div class="card card_size">
                  <Link to="/CardDetails">
                    <img src={img} class="card-img-top" alt="..." />
                  </Link>
                  <div class="card-body">
                    <h5
                      class="card-title
                            "
                    >
                      Card title
                    </h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link href="#" class="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-md-3 my-2">
                <div class="card card_size">
                  <Link to="/CardDetails">
                    <img src={img} class="card-img-top" alt="..." />
                  </Link>
                  <div class="card-body">
                    <h5
                      class="card-title
                            "
                    >
                      Card title
                    </h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link href="#" class="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
