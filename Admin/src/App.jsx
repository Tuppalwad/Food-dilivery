import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "./components/slider";
import ScrollToTop  from "./components/ScrollToTop";
function App() {
  return (
    <>
      {" "}
      <h1>hello</h1>
      <div className="App"></div>
      <Router>
        <ScrollToTop></ScrollToTop>
        <Slider></Slider>
        <Routes>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
