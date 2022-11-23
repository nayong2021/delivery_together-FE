import * as React from "react";
import "../../assets/css/common.css";
import { useNavigate, useLocation } from "react-router-dom";
import MetaTag from "../../components/common/MetaTag";

const IdResult = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

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
            아이디 찾기
          </div>
        </div>
      </header>

      <section className="find">
        <div className="wrap">
          <div className="id-result">
            <div className="frm">
              <div className="frm-guide">
                고객님의 정보와 일치하는 아이디입니다.
              </div>
              <input
                type="text"
                value={state.email}
                className="inp-frm"
                readOnly
              />
            </div>
          </div>

          <div className="btn-group-bottom2">
            <button
              className="btn btn-custom"
              onClick={() => navigate("/login")}
            >
              로그인
            </button>
            <button
              type="button"
              className="btn btn-custom btn-custom-v1"
              onClick={() => navigate("/login/findpw")}
            >
              비밀번호 찾기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IdResult;
