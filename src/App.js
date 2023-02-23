import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";


import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Home from "./components/Home";
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/home" element={<Home />} />
          </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
