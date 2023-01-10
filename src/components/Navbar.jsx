import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark  ">
        <div class="container In_lg_mode ">
          <Link class="navbar-brand" href="/"></Link>{" "}
          <div className="container nav_in_phone_mode ">
            <div className="logo-2">
              <Link className="logolink" to="/">
                UNICO FOODS
              </Link>
            </div>
            <div className="icons">
              <li class="nav-item">
                <Link class="nav-link icon_s" to="/Search">
                  <i class="fa fa-user"></i>
                </Link>
              </li>
              <li class="nav-item" style={{ marginLeft: "-10px" }}>
                <Link class="nav-link icon_s" to="/Cart">
                  <i class="fa fa-shopping-cart"></i>
                </Link>
              </li>

              <li class="nav-item" style={{ marginLeft: "-15px" }}>
                <Link class="nav-link" to="/Search">
                  <i class="fa fa-search"></i>
                </Link>
              </li>
            </div>
            <div className="menubtn">
              <button
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                class="navbar-toggler "
                data-target="#navbarSupportedContent"
                data-toggle="collapse"
                type="button"
                style={{
                  marginTop: "4px",
                  marginLeft: "11px",
                  marginRight: "-5px",
                }}
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div
            class="collapse navbar-collapse menubar "
            id="navbarSupportedContent"
          >
            <div className="logo">
              <Link className="logolink" to="/">
                UNICO FOODS
              </Link>
            </div>
            <div className="my_navbar mx-auto">
              <ul class="navbar-nav ml-auto ">
                <li class="nav-item active">
                  <Link class="nav-link nav_items" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link nav_items" to="/Product">
                    Product
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link nav_items" to="/Media">
                    Media
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link nav_items" to="/Profile">
                    Corporate Profile
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link nav_items" to="/Contact">
                    Contact
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link nav_items" to="/Blog">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="icon_in_lg_mode icon_in_phone">
              <li class="nav-item ">
                <Link class="nav-link" to="/Search">
                  <i class="fa fa-user"></i>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Cart">
                  <i class="fa fa-shopping-cart"></i>
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/Search">
                  <i class="fa fa-search"></i>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
