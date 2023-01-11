import React from "react";
import "../style/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div class="container-fluid my-5 footer_data">
        <footer
          class="text-center text-lg-start text-white"
          style={{ backgroundColor: "#253351" }}
        >
          <div class="container p-4 pb-0">
            <section class="container">
              <div class="row">
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">
                    <Link to="/">UNICO FOODS</Link>
                  </h6>
                  <p style={{ color: "#fff" }}>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>

                <hr class="w-100 clearfix d-md-none" />

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Link</h6>

                  <p>
                    <Link class="text-white" to="/">
                      Home
                    </Link>
                  </p>
                  <p>
                    <Link class="text-white" to="/About">
                      About
                    </Link>
                  </p>
                  <p>
                    <Link class="text-white" to="/Product">
                      Product
                    </Link>
                  </p>
                  <p>
                    <Link class="text-white" to="/Blog">
                      Blog
                    </Link>
                  </p>
                  <p>
                    <Link class="text-white" to="/Media">
                      Media
                    </Link>
                  </p>
                  <p>
                    <Link class="text-white" to="/Profile">
                      Profile
                    </Link>
                  </p>
                  <p>
                    <Link class="text-white" to="/Contact">
                      Contact
                    </Link>
                  </p>
                </div>

                <hr class="w-100 clearfix d-md-none" />

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">
                    Useful links
                  </h6>
                  <p>
                    <Link class="text-white">Your Account</Link>
                  </p>
                  <p>
                    <Link class="text-white">Become an Affiliate</Link>
                  </p>
                  <p>
                    <Link class="text-white">Shipping Rates</Link>
                  </p>
                  <p>
                    <Link class="text-white">Help</Link>
                  </p>
                </div>

                <hr class="w-100 clearfix d-md-none" />

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>

                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button
                      class="btn btn-outline-primary text-white"
                      type="button"
                      id="button-addon2"
                    >
                      Send
                    </button>
                  </div>
                  <p>
                    <i class="fas fa-home mr-3"></i> New York, NY 10012, US
                  </p>
                  <p>
                    <i class="fas fa-envelope mr-3"></i> info@gmail.com
                  </p>
                  <p>
                    <i class="fas fa-phone mr-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i class="fas fa-print mr-3"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </section>

            <hr class="my-3" />

            <section class="p-3 pt-0">
              <div class="row d-flex align-items-center">
                <div class="col-md-7 col-lg-8 text-center text-md-start">
                  <div class="p-3">
                    © 2020 Copyright:
                    <Link class="text-white" href="https://mdbootstrap.com/">
                      MDBootstrap.com
                    </Link>
                  </div>
                </div>

                <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  <Link
                    class="btn text-white btn-outline-light btn-floating m-1"
                    role="button"
                    style={{ marginLeft: "10px" }}
                  >
                    <i
                      style={{
                        padding: "6px",
                        border: "1px #fff",
                        borderRadius: "50%",
                      }}
                      class="fab icons_fooder fa-facebook-f"
                    ></i>
                  </Link>

                  <Link
                    class="btn text-white btn-outline-light btn-floating m-1"
                    role="button"
                    style={{ marginLeft: "10px" }}
                  >
                    <i
                      style={{
                        padding: "6px",
                        border: "1px #fff",
                        borderRadius: "50%",
                      }}
                      class="fab icons_fooder fa-twitter"
                    ></i>
                  </Link>

                  <Link
                    class="btn text-white btn-outline-light btn-floating m-1"
                    role="button"
                    style={{ marginLeft: "10px" }}
                  >
                    <i
                      style={{
                        padding: "6px",
                        border: "1px #fff",
                        borderRadius: "50%",
                      }}
                      class="fab icons_fooder fa-google"
                    ></i>
                  </Link>

                  <Link
                    class="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                    style={{ marginLeft: "10px" }}
                  >
                    <i
                      style={{
                        padding: "6px",
                        border: "1px #fff",
                        borderRadius: "50%",
                      }}
                      class="fab icons_fooder fa-instagram"
                    ></i>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
