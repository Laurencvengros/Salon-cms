import React from "react";
import Navigation from "./Navigation";
import Calendar from "./Calendar";
import Clients from "./Clients";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Pages = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </Router>
  );
};

export default Pages;
