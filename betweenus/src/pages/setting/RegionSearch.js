import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Location } from "../../assets/img/ico_location1.svg";
import { ReactComponent as Marker } from "../../assets/img/marker-pin-01.svg";

export default function RegionSearch() {
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
            주소 검색
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
              &nbsp;현재 위치로 설정
            </button>
          </div>

          <ol class="list-region">
            <li>
              <div class="txt">
                <Marker class="marker" />
                <div>
                  <div class="txt-title">서울특별시 강남구 서초4동</div>
                  <div>서울특별시 강남구 서초4동</div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
