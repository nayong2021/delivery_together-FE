import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import Basic from "./pages/Basic";
import ItemView from "./pages/ItemView";
import Add from "./pages/Add";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/itemview" element={<ItemView />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/basic" element={<Basic />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
