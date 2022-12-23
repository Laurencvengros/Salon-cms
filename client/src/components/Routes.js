import React from "react";
import Navigation from "./Navigation";
import Calendar from "./Calendar";
import Clients from "./Clients";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login"

const Pages = () => {
  return (
    
      <Router>
        <Navigation />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/clients" element={<Clients/>} />
            <Route path="/calendar" element={<Calendar/>} />
          </Routes>
        <Footer />
      </Router>
    
  );
};

export default Pages;
