import * as React from "react";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";
import GuidePic from "../../assets/img/img_guide1.png";
import { useNavigate } from "react-router-dom";

const Guide1 = () => {
  const navigate = useNavigate();
  return (
    <section className="guide">
      <MetaTag />
      <div className="guide-info">
        <div className="img-group">
          <img src={GuidePic} alt=" " />
        </div>

        <div className="txt-group">
          <div className="tit">오늘은 뭘 먹을까?</div>
          <div className="txt">
            호스트가 되어 내가 먹고싶은 메뉴를 고르고, <br />
            함께 배달을 받을 이웃을 모집해보세요!
          </div>
        </div>
      </div>

      <div className="guide-step">
        <div className="active"></div>
        <div></div>
        <div></div>
      </div>

      <div className="btn-group-bottom">
        <div
          className="btn-custom btn-custom-v1"
          onClick={() => navigate("/guide/2")}
        >
          다음
        </div>
      </div>
    </section>
  );
};

export default Guide1;
