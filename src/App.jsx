import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Cprofile";
import Contact from "./components/Contact";
import Media from "./components/Media";
import Product from "./components/Product";
import Blog from "./components/Blog";
import Login from "./components/Autho/login";
import CardDetails from "./components/CardDetails";
import About from "./components/About";
import ProductItems from "./components/ProductItems";
import Millits from "./components/Millits";
import Flakes from "./components/Flakes";
import Muesli from "./components/Muesli";
import Cookies from "./components/Cookies";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      {" "}
      <div className="App"></div>
      <Router>
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route path="/CardDetails" element={<CardDetails />} />
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Media" element={<Media />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/About" element={<About />} />
          <Route path="/ProductItems" element={<ProductItems />} />
          <Route path="/Millet" element={<Millits />} />
          <Route path="/Flakes" element={<Flakes />} />
          <Route path="/Muesli" element={<Muesli />} />
          <Route path="/Cookies" element={<Cookies />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
