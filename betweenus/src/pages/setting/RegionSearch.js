import * as React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Location } from "../../assets/img/ico_location1.svg";
import { ReactComponent as MapIcon } from "../../assets/img/map-01.svg";
import { RegionSearchApi } from "../../modules/api/member/RegionSearchApi";
import Mouse from "../../assets/img/img_mouse.png";

const GuideContainer = styled.div`
  margin: 30px 20px 20px 20px;
  display: flex;
`;

const Guide = styled.div`
  width: 70%;
`;

const Img = styled.div`
  width: 30%;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
`;

const GuidTopTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin: 0 0 5px 0;
`;

const GuideTitle = styled.div`
  color: #000000;
  font-weight: 300;
  font-size: 15px;
  margin: 10px 0 5px 0;
`;
const GuideEx = styled.div`
  font-weight: 300;
  font-size: 15px;
  color: #7e7e7e;
`;

export default function RegionSearch() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [list, setData] = useState([]);

  const onKeyPress = async (e) => {
    if (e.key === "Enter") {
      const searchResult = await RegionSearchApi(keyword);
      setData(searchResult.data.results.juso);
      setKeyword("");
    }
  };
  const keywordInput = useRef();

  useEffect(() => {
    keywordInput.current.focus();
  }, []);

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };
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
            주소 검색
          </div>
        </div>
      </header>

      <section className="region">
        <div className="wrap">
          <div className="search-group">
            <div className="inp-group-search">
              <input
                type="text"
                placeholder="동네 검색"
                className="inp-frm"
                onChange={handleKeyword}
                ref={keywordInput}
                onKeyPress={onKeyPress}
                value={keyword}
              />
              <button type="button" className="btn-delete"></button>
            </div>

            <button type="button" className="btn-search">
              <Location width={"18px"} height={"18px"} />
              &nbsp;현재 위치로 설정
            </button>
          </div>

          <ol className="list-region">
            {!list || list.length === 0 ? (
              <GuideContainer>
                <Guide>
                  <GuidTopTitle>이렇게 검색해 보세요</GuidTopTitle>
                  <GuideTitle>* 도로명 + 건물번호</GuideTitle>
                  <GuideEx>&nbsp;예) 우리로 12길 3</GuideEx>
                  <GuideTitle>* 지역명 + 번지</GuideTitle>
                  <GuideEx>&nbsp;예) 우리동 12-3</GuideEx>
                  <GuideTitle>* 건물명, 아파트명 </GuideTitle>
                  <GuideEx>&nbsp;예) 우리아파트 101동</GuideEx>
                </Guide>
                <Img>
                  <img src={Mouse} alt=" " width={"100%"} />
                </Img>
              </GuideContainer>
            ) : (
              list.map((item, idx) => (
                <li
                  key={idx}
                  onClick={() =>
                    navigate("/setting/region/post", { state: item })
                  }
                >
                  <div className="txt">
                    <MapIcon className="marker" />
                    <div>
                      <div className="txt-title">{item.jibunAddr}</div>
                      <div>[도로명] {item.roadAddrPart1}</div>
                    </div>
                  </div>
                </li>
              ))
            )}
          </ol>
        </div>
      </section>
    </>
  );
}
