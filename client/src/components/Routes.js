import React from "react";
import Navigation from "./Navigation";
import Calendar from "./Calendar";
import Clients from "./Clients";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login"
import SignUp from "./Signup";

const Pages = () => {
  return (

    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/clients" element={<Clients />} />
        <Route exact path="/calendar" element={<Calendar />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>

  );
};

export default Pages;
