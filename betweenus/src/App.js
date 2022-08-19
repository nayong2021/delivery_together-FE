import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import React from "react";
import Add from "./pages/Add";
import Map from "./pages/Map";
import Setting from "./pages/Setting";
import State from "./pages/orderState/State";
import Order from "./pages/home/Order";
import ItemView from "./pages/home/ItemView";
import OrderSheet from "./pages/home/OrderSheet";
import Chatting from "./components/orderState/Chatting";
import OrderState from "./components/orderState/OrderState";
import LogIn from "./pages/member/LogIn";
import Join from "./pages/member/Join";
import FindId from "./pages/member/FindId";
import FindPw from "./pages/member/FindPw";
import IdResult from "./pages/member/IdResult";
import PwResult from "./pages/member/PwResult";
import HomeSearch from "./pages/home/HomeSearch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/login/join" element={<Join />}></Route>
        <Route path="/login/findid" element={<FindId />}></Route>
        <Route path="/login/findid/idresult" element={<IdResult />}></Route>
        <Route path="/login/findpw" element={<FindPw />}></Route>
        <Route path="/login/findpw/pwresult" element={<PwResult />}></Route>
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
        <Route path="/search" element={<HomeSearch />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
