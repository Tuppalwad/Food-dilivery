import React from "react";
import Navbar from "./Navbar";
import ProductItems from "./ProductItems";
import Bg from "../Assets/images/slide-3.jpg";
export default function Flakes() {
  return (
    <>
      <Navbar></Navbar>
      <ProductItems Bg={Bg}></ProductItems>
    </>
  );
}
