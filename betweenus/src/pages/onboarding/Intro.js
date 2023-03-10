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
          <div className="txt">Welcome to ๐</div>
          <div className="txt2">์ฐ๋ฆฌ๋ผ๋ฆฌ</div>
          <div className="txt3">
            ์ด์๊ณผ ํจ๊ป, <br />
            ๋จน๊ณ ์ถ์ ์์์ ๋ถ๋ด์์ด ์ฆ๊ฒจ์ :)
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
