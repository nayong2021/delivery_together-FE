import * as React from "react";
import "../../assets/css/common.css";
import { useNavigate } from "react-router-dom";
import MetaTag from "../../components/common/MetaTag";
import { useLocation } from "react-router-dom";

const PwResult = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
            비밀번호 재설정
          </div>
        </div>
      </header>

      <section className="find">
        <div className="wrap">
          <div className="id-result">
            <div className="frm">
              <div className="frm-guide">
                {location.state.email}로 임시 비밀번호를 전송해 드렸습니다. <br></br>임시 비밀번호를 이용해 로그인 후 비밀번호를 변경해 주세요.
              </div>
            </div>
          </div>

          <div className="btn-group-bottom">
            <button
              className="btn btn-custom"
              onClick={() => navigate("/login")}
            >
              로그인
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PwResult;
