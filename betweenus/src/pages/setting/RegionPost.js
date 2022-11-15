import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Home } from "../../assets/img/home-03.svg";
import { ReactComponent as HomeSelected } from "../../assets/img/home-03-orange.svg";
import { ReactComponent as Building } from "../../assets/img/building-05.svg";
import { ReactComponent as BuildingSelected } from "../../assets/img/building-05-orange.svg";
import { ReactComponent as Etc } from "../../assets/img/marker-pin-02.svg";
import { ReactComponent as EtcSelected } from "../../assets/img/marker-pin-02-orange.svg";
import { useState } from "react";
import styled from "styled-components";
import { RegionPostApi } from "../../modules/api/member/RegionPostApi";

const EtcBox = styled.input`
  justify-content: center;
  align-items: center;
  display: flex;
  border: 1px solid #a5a5a9;
  border-radius: 5px;
  width: 100%;
  flex-direction: column;
  margin: 3px 3px 3px 3px;
  padding-top: 5%;
  padding-bottom: 5%;
  padding-left: 5%;
  font-size: 15px;
`;

export default function RegionPost() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [alias, setAlias] = useState("");
  const [btnActive, setBtnActive] = useState("");
  const [etcActive, setEtcActive] = useState(false);

  const handleAlias = (e) => {
    setAlias(e.target.value);
  };

  const onClickConfirm = async () => {
    let reqbody = {
      address: state.jibunAddr,
      alias: alias,
      addressCategory: "",
    };
    if (btnActive === "우리집") {
      reqbody.addressCategory = "우리집";
    }
    if (btnActive === "회사") {
      reqbody.addressCategory = "회사";
    }
    if (btnActive === "기타") {
      reqbody.addressCategory = "ETC";
    }
    await RegionPostApi(reqbody);

    navigate(-2);
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
            상세 정보 입력
          </div>
        </div>
      </header>

      <section className="region">
        <div className="wrap">
          <ol className="list-region">
            <li>
              <div className="txt">
                <div>
                  <div className="txt-address1">{state.jibunAddr}</div>
                  <div>[도로명] {state.roadAddrPart1}</div>
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div className="box-places">
          <div
            className={"box" + ("우리집" === btnActive ? "-selected" : "")}
            onClick={() => setBtnActive("우리집")}
          >
            <div className="contents" value={"우리집"}>
              {"우리집" === btnActive ? <HomeSelected /> : <Home />}
              우리집
            </div>
          </div>
          <div
            className={"box" + ("회사" === btnActive ? "-selected" : "")}
            onClick={() => setBtnActive("회사")}
          >
            <div className="contents" value={"회사"}>
              {"회사" === btnActive ? <BuildingSelected /> : <Building />}
              회사
            </div>
          </div>
          <div
            className={"box" + ("기타" === btnActive ? "-selected" : "")}
            onClick={() => setBtnActive("기타")}
          >
            <div
              className="contents"
              value={"기타"}
              onClick={() => setEtcActive(!etcActive)}
            >
              {"기타" === btnActive ? <EtcSelected /> : <Etc />}
              기타
            </div>
          </div>
        </div>
        {btnActive === "기타" ? (
          <div className="box-places">
            <EtcBox
              placeholder="주소 별명 입력"
              onChange={handleAlias}
              value={alias}
            />
          </div>
        ) : null}

        <div className="btn-group-bottom2">
          <button type="button" className="btn-custom" onClick={onClickConfirm}>
            확인
          </button>
        </div>
      </section>
    </>
  );
}
