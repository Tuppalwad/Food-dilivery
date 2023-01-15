import React from "react";
import Navbar from "./Navbar";
import ProductItems from "./ProductItems";
import Bg from "../Assets/images/slide-3.jpg";
function Cookies() {
  return (
    <>
      <Navbar> </Navbar>
      <ProductItems Bg={Bg}></ProductItems>
    </>
  );
}

export default Cookies;
