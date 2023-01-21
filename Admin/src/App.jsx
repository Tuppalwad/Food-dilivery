import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "./components/slider";
import ScrollToTop from "./components/ScrollToTop";
import Dashbord from "./components/Dashbord";
function App() {
  return (
    <>
      {" "}
      <div className="App"></div>
      <Router>
        <ScrollToTop></ScrollToTop>
        <Dashbord></Dashbord>
        {/* <Slider></Slider> */}
        <Routes></Routes>
      </Router>
    </>
  );
}

export default App;
