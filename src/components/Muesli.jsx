import React from "react";
import Navbar from "./Navbar";
import ProductItems from "./ProductItems";
import Bg from "../Assets/images/slide-2.jpg";
function Muesli() {
  return (
    <div>
      <Navbar></Navbar>
      <ProductItems Bg={Bg}></ProductItems>
    </div>
  );
}

export default Muesli;
