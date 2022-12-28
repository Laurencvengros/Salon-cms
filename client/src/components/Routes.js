// import React from "react";
// import Navigation from "./Navigation";
// import Calendar from "./Calendar";
// import Clients from "./Clients";
// import Home from "./Home";
// import Footer from "./Footer";
// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Login from "./Login"
// import SignUp from "./Signup";

// const Pages = () => {
//   const [formIsOpen, setFormOpen] = useState(false);
//   function openClientForm(props) {
//     setFormOpen(true);
//   }
//   function closeClientForm() {
//     setFormOpen(false);
//   }
//   return (

//     <Router>
//       <Navigation />
//       <Routes>
//         <Route exact path="/" element={<Login />} />
//         <Route exact path="/home" element={<Home />} />
//         <Route exact path="/clients" element={<Clients openClientForm={openClientForm} formIsOpen={formIsOpen} closeClientForm={closeClientForm} />} />
//         <Route exact path="/calendar" element={<Calendar />} />
//         <Route exact path="/signup" element={<SignUp />} />
//       </Routes>
//       <Footer />
//     </Router>

//   );
// };

// export default Pages;
