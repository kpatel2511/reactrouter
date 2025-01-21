import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import FormVal from "./FormVal";

const RouterExample = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<div>Login</div>}></Route>
        <Route path="*"element={<div>Error 404</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterExample;
