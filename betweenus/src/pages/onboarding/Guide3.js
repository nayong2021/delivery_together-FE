import * as React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";
import GuidePic from "../../assets/img/img_guide3.png";

const Guide3 = () => {
  const navigate = useNavigate();
  return (
    <section className="guide">
      <MetaTag />
      <div className="guide-info">
        <div className="img-group">
          <img src={GuidePic} alt=" " />
        </div>

        <div className="txt-group">
          <div className="tit">새로운 배달 문화 동참하기</div>
          <div className="txt">
            우리끼리 공동구매로 배달비를 아끼는 <br />
            새로운 배달 문화에 참여해보세요. <br />
            지금부터 시작해볼까요?
          </div>
        </div>
      </div>

      <div className="guide-step">
        <div></div>
        <div></div>
        <div className="active"></div>
      </div>

      <div className="btn-group-bottom">
        <div className="btn btn-custom" onClick={() => navigate("/login")}>
          로그인
        </div>
        <div
          className="btn btn-custom btn-custom-v1"
          onClick={() => navigate("/login/join")}
        >
          회원가입
        </div>
      </div>
    </section>
  );
};

export default Guide3;
