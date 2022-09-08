import * as React from "react";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";
import { useNavigate } from "react-router-dom";

export default function Unregister() {
  const navigate = useNavigate();
  return (
    <div id="root">
      <MetaTag />
      <header className="header">
        <div className="hd">
          <div className="hd-tit">
            <button
              type="button"
              className="hd-back"
              onClick={() => navigate(-1)}
            ></button>
            회원 탈퇴
          </div>
        </div>
      </header>
      <section className="profile">
        <div className="btn-group-bottom">
          <button
            type="button"
            className="btn-custom"
            onClick={() => navigate("ordersheet")}
          >
            탈퇴하기
          </button>
        </div>
      </section>
    </div>
  );
}
