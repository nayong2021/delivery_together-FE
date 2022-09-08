import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import React from "react";
import Add from "./pages/Add";
import Map from "./pages/Map";
import Setting from "./pages/setting/Setting";
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
import RegionSearch from "./pages/setting/RegionSearch";
import RegionList from "./pages/setting/RegionList";
import RegionPost from "./pages/setting/RegionPost";
import Intro from "./pages/onboarding/Intro";
import Guide1 from "./pages/onboarding/Guide1";
import Guide2 from "./pages/onboarding/Guide2";
import Guide3 from "./pages/onboarding/Guide3";
import DefaultRoute from "./routes/DefaultRoute";
import PrivateRoute from "./components/PrivateRoute";
import EditProfile from "./pages/setting/EditProfile";
import NickName from "./pages/setting/NickName";
import OrderHistory from "./pages/setting/OrderHistory";
import Password from "./pages/setting/Password";
import Unregister from "./pages/setting/Unregister";
import OrderHistoryState from "./pages/setting/OrderHistoryState";
import Phone from "./pages/setting/Phone";

function App() {
  return (
    <Router>
      <Routes>
        {/* 로그인 */}
        <Route path="/login" element={<DefaultRoute />}>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/login/join" element={<Join />}></Route>
          <Route path="/login/findid" element={<FindId />}></Route>
          <Route path="/login/findid/idresult" element={<IdResult />}></Route>
          <Route path="/login/findpw" element={<FindPw />}></Route>
          <Route path="/login/findpw/pwresult" element={<PwResult />}></Route>
        </Route>

        {/* 온보딩 */}
        <Route path="/guide" element={<DefaultRoute />}>
          <Route path="/guide" element={<Intro />}></Route>
          <Route path="/guide/1" element={<Guide1 />}></Route>
          <Route path="/guide/2" element={<Guide2 />}></Route>
          <Route path="/guide/3" element={<Guide3 />}></Route>
        </Route>

        <Route path="/" element={<PrivateRoute />}>
          {/* 홈 -> 상세, 주문 */}
          <Route path="/itemview/:index" element={<ItemView />} />
          <Route path="/itemview/:index/order" element={<Order />} />
          <Route
            path="/itemview/:index/order/ordersheet"
            element={<OrderSheet />}
          />

          {/* 모집하기 */}
          <Route path="/add" element={<Add />}></Route>

          {/* 지도 */}
          <Route path="/map" element={<Map />}></Route>

          {/* 배달현황 */}
          <Route path="/state/:index" element={<State />}>
            <Route path="/state/:index" element={<OrderState />}></Route>
            <Route
              path="/state/:index/chatting/"
              element={<Chatting />}
            ></Route>
          </Route>

          {/* 환경설정 */}
          <Route path="/setting" element={<Setting />}></Route>
          <Route path="/setting/profile" element={<EditProfile />}></Route>
          <Route
            path="/setting/profile/nickname"
            element={<NickName />}
          ></Route>
          <Route
            path="/setting/profile/password"
            element={<Password />}
          ></Route>
          <Route
            path="/setting/profile/phone"
            element={<Phone />}
          ></Route>
          <Route
            path="/setting/profile/unregister"
            element={<Unregister />}
          ></Route>
          <Route path="/setting/region" element={<RegionList />}></Route>
          <Route
            path="/setting/region/search"
            element={<RegionSearch />}
          ></Route>
          <Route path="/setting/region/post" element={<RegionPost />}></Route>
          <Route
            path="/setting/orderhistory"
            element={<OrderHistory />}
          ></Route>

          <Route
            path="/setting/orderhistory/:index"
            element={<OrderHistoryState />}
          >
            <Route
              path="/setting/orderhistory/:index"
              element={<OrderState />}
            ></Route>
            <Route
              path="/setting/orderhistory/:index/chatting"
              element={<Chatting />}
            ></Route>
          </Route>

          {/* 홈 */}
          <Route path="/search" element={<HomeSearch />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
