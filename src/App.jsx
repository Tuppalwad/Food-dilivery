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
function App() {
  return (
    <>
      {" "}
      <div className="App"></div>
      <Router>
        <Routes>
          <Route path="/CardDetails" element={<CardDetails />} />
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Media" element={<Media />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
