import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Home from "../pages/home/Home";
import React, { useEffect } from "react";
import Add from "../pages/Add";
import Map from "../pages/Map";
import Setting from "../pages/setting/Setting";
import State from "../pages/orderState/State";
import Order from "../pages/home/Order";
import ItemView from "../pages/home/ItemView";
import OrderSheet from "../pages/home/OrderSheet";
import Chatting from "../components/orderState/Chatting";
import OrderState from "../components/orderState/OrderState";
import LogIn from "../pages/member/LogIn";
import Join from "../pages/member/Join";
import FindId from "../pages/member/FindId";
import FindPw from "../pages/member/FindPw";
import IdResult from "../pages/member/IdResult";
import PwResult from "../pages/member/PwResult";
import HomeSearch from "../pages/home/HomeSearch";
import RegionSearch from "../pages/setting/RegionSearch";
import RegionList from "../pages/setting/RegionList";
import RegionPost from "../pages/setting/RegionPost";
import Intro from "../pages/onboarding/Intro";
import Guide1 from "../pages/onboarding/Guide1";
import Guide2 from "../pages/onboarding/Guide2";
import Guide3 from "../pages/onboarding/Guide3";
import AuthRoute from "../components/AuthRoute";
import DefaultRoute from "./DefaultRoute";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return useRoutes([
    {
      path: "/login",
      element: <DefaultRoute />,
      children: [
        { path: "", element: <LogIn /> },
        { path: "join", element: <Join /> },
        { path: "findid", element: <FindId /> },
        { path: "findid/idresult", element: <IdResult /> },
        { path: "findpw", element: <FindPw /> },
        { path: "findpw/pwresult", element: <PwResult /> },
      ],
    },
    {
      path: "/guide",
      element: <DefaultRoute />,
      children: [
        { path: "", element: <Intro /> },
        { path: "1", element: <Guide1 /> },
        { path: "2", element: <Guide2 /> },
        { path: "3", element: <Guide3 /> },
      ],
    },
    {
      path: "/",
      element: <PrivateRoute />,
      children: [
        { path: "", element: <Home /> },
        { path: "map", element: <Map /> },
        { path: "search", element: <HomeSearch /> },
        { path: "add", element: <Add /> },
        {
          path: "itemview",
          children: [
            {
              path: ":index",
              element: <ItemView />,
              children: [
                { path: "order", children: <Order /> },
                { path: "order/ordersheet", children: <OrderSheet /> },
              ],
            },
          ],
        },
        {
          path: "state",
          children: [
            {
              path: ":index",
              element: <State />,
              children: [
                { path: "", children: <RegionList /> },
                { path: "chatting", children: <Chatting /> },
              ],
            },
          ],
        },
        {
          path: "setting",
          children: [
            { path: "", element: <Setting /> },
            { path: "region", element: <RegionList /> },
            { path: "region/search", element: <RegionSearch /> },
            { path: "region/post", element: <RegionPost /> },
          ],
        },
      ],
    },
  ]);
};

export { AllRoutes };
