import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Home } from "../../assets/img/home-03.svg";
import { ReactComponent as Building } from "../../assets/img/building-05.svg";
import { ReactComponent as Etc } from "../../assets/img/marker-pin-02.svg";

export default function RegionPost() {
  const navigate = useNavigate();

  return (
    <>
      <header class="header">
        <div class="hd">
          <div class="hd-tit">
            <button
              type="button"
              class="hd-back"
              onClick={() => navigate(-1)}
            ></button>
            상세 정보 입력
          </div>
        </div>
      </header>

      <section class="region">
        <div class="wrap">
          <ol class="list-region">
            <li>
              <div class="txt">
                <div>
                  <div class="txt-address1">
                    서울특별시 강남구 대치동 172-66
                  </div>
                  <div>[도로명] 서울특별시 강남구 테헤란로 340</div>
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div class="box-places">
          <div class="box">
            <div class="contents">
              <Home />
              우리집
            </div>
          </div>
          <div class="box">
            <div class="contents">
              <Building />
              회사
            </div>
          </div>
          <div class="box">
            <div class="contents">
              <Etc />
              기타
            </div>
          </div>
        </div>
        <div className="btn-group-bottom">
          <button type="button" className="btn-custom">
            확인
          </button>
        </div>
      </section>
    </>
  );
}
