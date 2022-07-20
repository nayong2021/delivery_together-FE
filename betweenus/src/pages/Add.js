import * as React from "react";
import MetaTag from "../components/common/MetaTag";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();

  return (
    <div className="Add">
      <MetaTag />
      <header className="header">
        <div className="hd">
          <div className="hd-tit">
            <button
              type="button"
              className="hd-back"
              onClick={() => navigate(-1)}
            ></button>
            모집하기
          </div>
        </div>
      </header>

      <section className="item-write">
        <div className="wrap">
          <div className="frm2">
            <div className="frm-group">
              <input type="text" placeholder="제목" className="inp-frm" />
            </div>

            <div className="frm-group frm-group-time">
              <div className="tit-frm">
                주문시간 <br />
                설정
              </div>
              <div className="inp-group-time">
                타임시커 라이브러리가 들어갑니다.
              </div>
            </div>

            <div className="frm-group">
              <input type="text" placeholder="가게 이름" className="inp-frm" />
            </div>

            <div className="frm-group">
              <div className="inp-group">
                <input
                  type="text"
                  placeholder="픽업 장소"
                  className="inp-frm"
                />
                <button type="button" className="btn-frm">
                  주소 찾기
                </button>
              </div>
            </div>

            <div className="frm-group">
              <input
                type="text"
                placeholder="상세 픽업 장소"
                className="inp-frm"
              />
            </div>
          </div>

          <div className="add-info">
            <div className="tit">추가정보</div>
            <textarea className="txt"></textarea>
          </div>

          <div className="btn-group-bottom">
            <Link to="/home">
              <button type="button" className="btn-custom">
                모집하기
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Add;
