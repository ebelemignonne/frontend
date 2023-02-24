import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//importation les pages principale
import Elat from "./components/elat";
import Dashboard from "./components/creud/Dashboard";
import Login from "./components/creud/Login";
import NavbarP from "./components/Navbar";
import Register from "./components/creud/Register";
import Home from "./components/creud/Home";

 
// importation des pages intermediaire
import Sculpture from "./components/Sculpture/sculpture";
import Services from "./components/ServicesE/servives";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Elat />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/navbar" element={<NavbarP />} />
            <Route path="/home" element={<Home />} />
            {/* routes intermediaire */}
            <Route path="/sculpture" element={<Sculpture />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
