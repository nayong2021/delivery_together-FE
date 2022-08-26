import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RegionListGetApi } from "../../modules/api/member/RegionListGetApi";
import RegionListItem from "../../components/settings/RegionListItem";
import useStoreCurrentUser from "../../store/storeCurrentUser";
import { PatchRepresentationRegion } from "../../modules/api/member/PatchRepresentationRegion";

export default function RegionList() {
  const navigate = useNavigate();
  const [regionList, setRegionList] = useState({});
  const { user } = useStoreCurrentUser();
  const getList = async () => {
    const result = await RegionListGetApi();
    console.log(result)
    setRegionList(result.data);
  }

  const onClickRegion = async (addressIdx) => {
    const result = await PatchRepresentationRegion(addressIdx);
    if(result){
      getList();
    }
  }

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
            <RegionListItem
            addressInfo={regionList.homeAddressInfo}
            onClickRegion={onClickRegion}
            />
            <RegionListItem
            addressInfo={regionList.officeAddressInfo}
            onClickRegion={onClickRegion}
            />
            {
              regionList.etcAddressesCount > 0 ? (regionList.etcAddressInfoList.map((item, idx) => (
                <RegionListItem
                key={idx}
                addressInfo={item}
                onClickRegion={onClickRegion}
                />
              ))) : (null)
          }
          </ol>
          <div className="btn-group-bottom">
            <button type="button" 
            className="btn-custom"
            onClick={() => navigate("/")}>
              내 동네 설정 완료
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
