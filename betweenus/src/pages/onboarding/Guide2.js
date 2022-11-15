import * as React from "react";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";
import GuidePic from "../../assets/img/img_guide2.png";
import { useNavigate } from "react-router-dom";

const Guide2 = () => {
  const navigate = useNavigate();
  return (
    <section className="guide">
      <MetaTag />
      <div className="guide-info">
        <div className="img-group">
          <img src={GuidePic} alt=" " />
        </div>

        <div className="txt-group">
          <div className="tit">이웃들과 더치페이</div>
          <div className="txt">
            이미 먹고싶은 메뉴방이 있다면, <br />
            게스트로 참가해서 이웃들과 <br />
            배달비 &amp; 최소주문금액을 아껴보세요!
          </div>
        </div>
      </div>

      <div className="guide-step">
        <div></div>
        <div className="active"></div>
        <div></div>
      </div>

      <div className="btn-group-bottom2">
        <div
          className="btn-custom btn-custom-v2"
          onClick={() => navigate("/guide/3")}
        >
          다음
        </div>
      </div>
    </section>
  );
};

export default Guide2;
