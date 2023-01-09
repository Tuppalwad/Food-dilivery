import React from "react";
import { Link } from "react-router-dom";
import "../style.css/slider.css";
import "../style.css/navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark   ">
        <div class="container">
          <Link class="navbar-brand" href="/"></Link>{" "}
          <div className="logo-2">
            <Link className="logolink" to="/">
              UNICO FOODS
            </Link>
          </div>
          <button
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            class="navbar-toggler"
            data-target="#navbarSupportedContent"
            data-toggle="collapse"
            type="button"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto my-2">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Product">
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Media">
                  Media
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Profile">
                  Corporate Profile
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Contact">
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Blog">
                  Blog
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div className="icon_in_lg_mode ">
            <li class="nav-item">
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
      </nav>
    </div>
  );
}
