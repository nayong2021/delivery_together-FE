import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import React from "react";
import Basic from "./pages/Basic";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/basic" element={<Basic />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
