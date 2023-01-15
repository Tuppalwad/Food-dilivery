import React from "react";
import Navbar from "./Navbar";
import ProductItems from "./ProductItems";
import Bg from "../Assets/images/slide-1.jpg";

export default function Millits() {
  return (
    <div>
      <Navbar></Navbar>
      <ProductItems Bg={Bg}></ProductItems>
    </div>
  );
}
