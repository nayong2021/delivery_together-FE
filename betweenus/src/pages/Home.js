import * as React from "react";
import "../assets/css/common.css";
import MetaTag from "../components/MetaTag";
import DrowpdownMenuHeader from "../components/DropdownMenuHeader";
import { ReactComponent as ShortCut } from "../assets/img/ico_shortcut1.svg";
import { ReactComponent as Clock } from "../assets/img/ico_clock1.svg";

const Home = () => {
  return (
    <div className="Home">
      <MetaTag />
      <DrowpdownMenuHeader />
      <section className="main">
        <div className="wrap">
          <a href="#!" className="bnr-main">
            <div className="txt-group">
              <div className="txt">배달 공동구매를 시작해보세요!</div>
              <div className="txt2">
                지금 동네인증을 하고 근처 이웃들과 <br />
                함께 배달음식을 주문하세요.
              </div>
            </div>

            <ShortCut />
          </a>

          <ol className="list-item">
            <li>
              <a href="sub/item-view.html">
                <div className="tit">BBQ 치킨 같이 시켜먹어요</div>
                <div className="place">BBQ 치킨 아주대점</div>
                <div className="info-group">
                  <div className="time">
                    <Clock />
                    마감 6:00pm
                  </div>
                  <div className="info">
                    <span className="price">예상배달비: 4000원 / 3명</span>
                    <span className="distance">0.1km</span>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="sub/item-view.html">
                <div className="tit">피자 배달비 더치페이해요~</div>
                <div className="place">도미노피자 우만동점</div>
                <div className="info-group">
                  <div className="time">
                    <Clock />
                    마감 6:30pm
                  </div>
                  <div className="info">
                    <span className="price">예상배달비: 4000원 / 3명</span>
                    <span className="distance">0.1km</span>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="sub/item-view.html">
                <div className="tit">피자 배달비 더치페이해요~</div>
                <div className="place">도미노피자 우만동점</div>
                <div className="info-group">
                  <div className="time">
                    <Clock />
                    마감 6:30pm
                  </div>
                  <div className="info">
                    <span className="price">예상배달비: 4000원 / 3명</span>
                    <span className="distance">0.1km</span>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="sub/item-view.html">
                <div className="tit">피자 배달비 더치페이해요~</div>
                <div className="place">도미노피자 우만동점</div>
                <div className="info-group">
                  <div className="time">
                    <Clock />
                    마감 6:30pm
                  </div>
                  <div className="info">
                    <span className="price">예상배달비: 4000원 / 3명</span>
                    <span className="distance">0.1km</span>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="sub/item-view.html">
                <div className="tit">피자 배달비 더치페이해요~</div>
                <div className="place">도미노피자 우만동점</div>
                <div className="info-group">
                  <div className="time">
                    <Clock />
                    마감 6:30pm
                  </div>
                  <div className="info">
                    <span className="price">예상배달비: 4000원 / 3명</span>
                    <span className="distance">0.1km</span>
                  </div>
                </div>
              </a>
            </li>
          </ol>
        </div>
      </section>

      <footer className="footer">
        <div className="ft">
          <div className="ft-menu">
            <a href="index.html" className="active">
              <div className="ico"></div>
              <div className="tit">홈</div>
            </a>
            <a href="sub/map.html">
              <div className="ico"></div>
              <div className="tit">지도</div>
            </a>
            <a href="sub/item-write.html">
              <i className="ico" aria-hidden="true"></i>
            </a>
            <a href="sub/cart.html">
              <div className="ico"></div>
              <div className="tit">주문</div>
            </a>
            <a href="sub/setting.html">
              <div className="ico"></div>
              <div className="tit">설정</div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
