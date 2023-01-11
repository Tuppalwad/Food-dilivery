import React from "react";
import Img from "../Assets/images/slide-1.jpg";
import "../style/news.css";
export default function Newsitem() {
  return (
    <div>
      <div className="container text-center my-3">
        <h1>News Card</h1>
      </div>
      <div class="container mydiv">
        <div class="row">
          <div class="col-md-4">
            <div class="bbb_deals">
              <div class="ribbon ribbon-top-right">
                <span>
                  <small class="cross">x </small>4
                </span>
              </div>
              <div class="bbb_deals_title">Today's Combo Offer</div>
              <div class="bbb_deals_slider_container">
                <div class=" bbb_deals_item">
                  <div class="bbb_deals_image">
                    <img src={Img} alt="" />
                  </div>
                  <div class="bbb_deals_content">
                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                      <div class="bbb_deals_item_category">
                        <a href="#">items</a>
                      </div>
                      <div class="bbb_deals_item_price_a ml-auto">
                        <strike>₹30</strike>
                      </div>
                    </div>
                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                      <div class="bbb_deals_item_name">Potato cokies</div>
                      <div class="bbb_deals_item_price ml-auto">₹25</div>
                    </div>
                    <div class="available">
                      <div class="available_line d-flex flex-row justify-content-start">
                        <div class="available_title">
                          Available: <span>6</span>
                        </div>
                        <div class="sold_stars ml-auto">
                          {" "}
                          <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                          <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                          <i class="fa fa-star"></i>{" "}
                        </div>
                      </div>
                      <div class="available_bar">
                        <span style={{ width: "17%" }}></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="bbb_deals">
              <div class="ribbon ribbon-top-right">
                <span>
                  <small class="cross">x </small>2
                </span>
              </div>
              <div class="bbb_deals_title">Today's Combo Offer</div>
              <div class="bbb_deals_slider_container">
                <div class=" bbb_deals_item">
                  <div class="bbb_deals_image">
                    <img src={Img} alt="" />
                  </div>
                  <div class="bbb_deals_content">
                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                      <div class="bbb_deals_item_category">
                        <a href="#">items</a>
                      </div>
                      <div class="bbb_deals_item_price_a ml-auto">
                        <strike>₹44</strike>
                      </div>
                    </div>
                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                      <div class="bbb_deals_item_name">Testy food</div>
                      <div class="bbb_deals_item_price ml-auto">₹22</div>
                    </div>
                    <div class="available">
                      <div class="available_line d-flex flex-row justify-content-start">
                        <div class="available_title">
                          Available: <span>6</span>
                        </div>
                        <div class="sold_stars ml-auto">
                          {" "}
                          <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                          <i class="fa fa-star"></i>{" "}
                        </div>
                      </div>
                      <div class="available_bar">
                        <span style={{ width: "17%" }}></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="bbb_deals">
              <div class="ribbon ribbon-top-right">
                <span>
                  <small class="cross">x </small>3
                </span>
              </div>
              <div class="bbb_deals_title">Today's Combo Offer</div>
              <div class="bbb_deals_slider_container">
                <div class=" bbb_deals_item">
                  <div class="bbb_deals_image">
                    <img src={Img} alt="" />
                  </div>
                  <div class="bbb_deals_content">
                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                      <div class="bbb_deals_item_category">
                        <a href="#">items</a>
                      </div>
                      <div class="bbb_deals_item_price_a ml-auto">
                        <strike>₹30</strike>
                      </div>
                    </div>
                    <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                      <div class="bbb_deals_item_name">Test</div>
                      <div class="bbb_deals_item_price ml-auto">₹27</div>
                    </div>
                    <div class="available">
                      <div class="available_line d-flex flex-row justify-content-start">
                        <div class="available_title">
                          Available: <span>6</span>
                        </div>
                        <div class="sold_stars ml-auto">
                          {" "}
                          <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                          <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                        </div>
                      </div>
                      <div class="available_bar">
                        <span style={{ width: "17%" }}></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
