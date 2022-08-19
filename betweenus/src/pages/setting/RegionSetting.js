import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Location } from "../../assets/img/ico_location1.svg";

export default function RegionSetting() {
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
            내 동네 설정
          </div>
        </div>
      </header>

      <section class="region">
        <div class="wrap">
          <div class="search-group">
            <div class="inp-group-search">
              <input type="text" placeholder="동네 검색" class="inp-frm" />
              <button type="button" class="btn-delete"></button>
            </div>

            <button type="button" class="btn-search">
              <Location width={"18px"} height={"18px"} />
              &nbsp;현재 위치로 검색
            </button>
          </div>

          <div class="region-info">
            지역은 최소 1개 이상, 최대 3개까지 설정 가능해요.
          </div>

          <ol class="list-region">
            <li>
              <div class="txt">서울특별시 강남구 서초4동</div>
              <div class="ck-area">
                <input
                  id="region_ck1"
                  type="checkbox"
                  name="region_ck"
                  class="ck-custom"
                />
                <label for="region_ck1"></label>
              </div>
            </li>

            <li>
              <div class="txt">서울특별시 강남구 서초3동</div>
              <div class="ck-area">
                <input
                  id="region_ck2"
                  type="checkbox"
                  name="region_ck"
                  class="ck-custom"
                />
                <label for="region_ck2"></label>
              </div>
            </li>

            <li>
              <div class="txt">서울특별시 강남구 서초2동</div>
              <div class="ck-area">
                <input
                  id="region_ck3"
                  type="checkbox"
                  name="region_ck"
                  class="ck-custom"
                />
                <label for="region_ck3"></label>
              </div>
            </li>

            <li>
              <div class="txt">서울특별시 강남구 서초1동</div>
              <div class="ck-area">
                <input
                  id="region_ck4"
                  type="checkbox"
                  name="region_ck"
                  class="ck-custom"
                />
                <label for="region_ck4"></label>
              </div>
            </li>

            <li>
              <div class="txt">서울특별시 강남구 반포1동</div>
              <div class="ck-area">
                <input
                  id="region_ck5"
                  type="checkbox"
                  name="region_ck"
                  class="ck-custom"
                />
                <label for="region_ck5"></label>
              </div>
            </li>
          </ol>

          <div class="btn-group-bottom">
            <button type="button" class="btn-custom">
              내 동네 설정 완료
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
