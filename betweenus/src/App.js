import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import React from "react";
import Add from "./pages/Add";
import Map from "./pages/Map";
import Setting from "./pages/Setting";
import State from "./pages/Order/State";
import Order from "./pages/home/Order";
import ItemView from "./pages/home/ItemView";
import OrderSheet from "./pages/home/OrderSheet";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/itemview" element={<ItemView />}>
          <Route path="/itemview/:index" element={<ItemView />} />
          <Route path="/itemview/:index/order" element={<Order />} />
          <Route
            path="/itemview/:index/order/ordersheet"
            element={<OrderSheet />}
          />
        </Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/map" element={<Map />}></Route>
        <Route path="/state" element={<State />}></Route>
        <Route path="/setting" element={<Setting />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
