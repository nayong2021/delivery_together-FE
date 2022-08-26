import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Marker } from "../../assets/img/marker-pin-01.svg";
import { ReactComponent as Check } from "../../assets/img/check.svg";
import useStoreCurrentUser from "../../store/storeCurrentUser";
import { GetAddressSettingApi } from "../../modules/api/setting/GetAddressSettingApi";
import { useState, useEffect } from "react";

export default function RegionList() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const { user } = useStoreCurrentUser();
  console.log(user.memberIdx);

  const getList = async () => {
    const data = await GetAddressSettingApi(user.memberIdx);
    setList(data);
    console.log(list);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <header className="header">
        <div className="hd">
          <div className="hd-tit">
            <button
              type="button"
              className="hd-back"
              onClick={() => navigate(-1)}
            ></button>
            내 동네 설정
          </div>
        </div>
      </header>

      <section className="region">
        <div className="wrap">
          <div className="search-group">
            <div
              className="inp-group-search"
              onClick={() => navigate("search")}
            >
              <input type="text" placeholder="동네 검색" className="inp-frm" />
              <button type="button" className="btn-delete"></button>
            </div>
          </div>

          {/* 체크박스는 백엔드에서 값 넘겨주기로 함*/}
          <ol className="list-region">
            <li>
              <div className="txt">
                <Marker className="marker" />
                <div>
                  <div className="txt-title">서울특별시 강남구 서초4동</div>
                  <div>서울특별시 강남구 서초4동</div>
                </div>
              </div>

              <div className="ck-area">
                <Check />
                {/* <input
                  id="region_ck1"
                  type="checkbox"
                  name="region_ck"
                  className="ck-custom"
                />
                <label htmlfor="region_ck1"></label> */}
              </div>
            </li>
          </ol>
          <div className="btn-group-bottom">
            <button type="button" className="btn-custom">
              내 동네 설정 완료
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
