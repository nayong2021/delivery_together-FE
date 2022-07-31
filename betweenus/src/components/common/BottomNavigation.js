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
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div className="ico"></div>
            <div className="tit">홈</div>
          </NavLink>
          <NavLink
            to="/map"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div className="ico"></div>
            <div className="tit">지도</div>
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i className="ico" aria-hidden="true"></i>
          </NavLink>
          <NavLink
            to="/state"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div className="ico"></div>
            <div className="tit">주문</div>
          </NavLink>
          <NavLink
            to="/setting"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div className="ico"></div>
            <div className="tit">설정</div>
          </NavLink>
        </div>
      </div>
    </footer>
  );
}
