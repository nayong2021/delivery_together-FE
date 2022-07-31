import * as React from "react";
import "../../assets/css/common.css";
import { NavLink } from "react-router-dom";

export default function BottomNavigation() {
  return (
    <footer className="footer">
      <div className="ft">
        <div className="ft-menu">
          <NavLink
            to="/home"
            class={({ isActive }) => (isActive ? "active" : "")}
          >
            <div className="ico"></div>
            <div className="tit">홈</div>
          </NavLink>
          <NavLink
            to="/map"
            class={({ isActive }) => (isActive ? "active" : "")}
          >
            <div className="ico"></div>
            <div className="tit">지도</div>
          </NavLink>
          <NavLink
            to="/add"
            class={({ isActive }) => (isActive ? "active" : "")}
          >
            <i className="ico" aria-hidden="true"></i>
          </NavLink>
          <NavLink
            to="/state"
            class={({ isActive }) => (isActive ? "active" : "")}
          >
            <div className="ico"></div>
            <div className="tit">주문</div>
          </NavLink>
          <NavLink
            to="/setting"
            class={({ isActive }) => (isActive ? "active" : "")}
          >
            <div className="ico"></div>
            <div className="tit">설정</div>
          </NavLink>
        </div>
      </div>
    </footer>
  );
}
