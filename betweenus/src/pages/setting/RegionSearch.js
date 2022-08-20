import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Location } from "../../assets/img/ico_location1.svg";
import { ReactComponent as Marker } from "../../assets/img/marker-pin-01.svg";
import { RegionSearchApi } from "../../modules/api/member/RegionSearchApi";

export default function RegionSearch() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [list, setData] = useState([]);
  const onKeyPress = async (e) => {
    if(e.key === 'Enter'){
      const searchResult = await RegionSearchApi(keyword);
      setData(searchResult.data.results.juso);
      setKeyword("");
    }
  }

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
              value={keyword}/>
              <button type="button" className="btn-delete"></button>
            </div>

            <button type="button" className="btn-search">
              <Location width={"18px"} height={"18px"} />
              &nbsp;현재 위치로 설정
            </button>
          </div>

          <ol className="list-region">
            {list.map((item, idx) => (
              <li key={idx}>
              <div className="txt">
                <div>
                  <div className="txt-title">{item.jibunAddr}</div>
                  <div>[도로명] {item.roadAddrPart1}</div>
                </div>
              </div>
            </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
