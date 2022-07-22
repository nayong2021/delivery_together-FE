import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import Basic from "./pages/Basic";
import Add from "./pages/Add";
import Map from "./pages/Map";
import Setting from "./pages/Setting";
import State from "./pages/State";
import Order from "./pages/Order";
import ItemView from "./pages/ItemView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home/*" element={<Home />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/map" element={<Map />}></Route>
        <Route path="/State" element={<State />}></Route>
        <Route path="/setting" element={<Setting />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/home/1" element={<ItemView />}></Route>
        <Route path="/home/2" element={<ItemView />}></Route>
        <Route path="/home/3" element={<ItemView />}></Route>
        <Route path="/basic" element={<Basic />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
