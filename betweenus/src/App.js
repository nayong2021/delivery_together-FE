import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import React from "react";
import Add from "./pages/Add";
import Map from "./pages/Map";
import Setting from "./pages/Setting";
import State from "./pages/OrderState/State";
import Order from "./pages/Home/Order";
import ItemView from "./pages/Home/ItemView";
import OrderSheet from "./pages/Home/OrderSheet";
import Chatting from "./components/OrderState/Chatting";
import OrderState from "./components/OrderState/OrderState";
import LogIn from "./pages/Member/LogIn";
import Join from "./pages/Member/Join";
import FindId from "./pages/Member/FindId";
import FindPw from "./pages/Member/FindPw";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/login/join" element={<Join />}></Route>
        <Route path="/login/findid" element={<FindId />}></Route>
        <Route path="/login/findpw" element={<FindPw />}></Route>
        <Route path="/itemview/:index" element={<ItemView />} />
        <Route path="/itemview/:index/order" element={<Order />} />
        <Route
          path="/itemview/:index/order/ordersheet"
          element={<OrderSheet />}
        />
        <Route path="/add" element={<Add />}></Route>
        <Route path="/map" element={<Map />}></Route>
        <Route path="/state" element={<State />}>
          <Route path="/state" element={<OrderState />}></Route>
          <Route path="/state/chatting" element={<Chatting />}></Route>
        </Route>
        <Route path="/setting" element={<Setting />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
