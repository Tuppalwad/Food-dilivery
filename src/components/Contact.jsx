import React from "react";
import Navbar from "./Navbar";
export default function Contact() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>Contact</div>;
    </>
  );
}
// reusing component in react
// once a part is loaded don't load it twice in react
// do not waste loaded data after leaving page in react
