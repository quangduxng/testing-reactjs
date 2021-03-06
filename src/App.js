import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Homepage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import React from "react";
import { Routes ,Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/home" element= { <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <Signup /> } />
    </Routes>
    <Footer />
    </>
  )
}

export default App;
