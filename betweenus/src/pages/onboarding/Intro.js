import * as React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";

const Intro = () => {
  const navigate = useNavigate();
  return (
    <div id="root" onClick={() => navigate("/guide/1")}>
      <section className="intro">
        <MetaTag />
        <div className="txt-group">
          <div className="txt">Welcome to 👋</div>
          <div className="txt2">우리끼리</div>
          <div className="txt3">
            이웃과 함께, <br />
            먹고싶은 음식을 부담없이 즐겨요 :)
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
