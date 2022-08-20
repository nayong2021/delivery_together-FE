import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Home } from "../../assets/img/home-03.svg";
import { ReactComponent as HomeSelected } from "../../assets/img/home-03-orange.svg";
import { ReactComponent as Building } from "../../assets/img/building-05.svg";
import { ReactComponent as BuildingSelected } from "../../assets/img/building-05-orange.svg";
import { ReactComponent as Etc } from "../../assets/img/marker-pin-02.svg";
import { ReactComponent as EtcSelected } from "../../assets/img/marker-pin-02-orange.svg";
import { useState, useEffect } from "react";

export default function RegionPost() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [btnActive, setBtnActive] = useState("");
  console.log(state);

  // useEffect(() => {
  //   console.log("effect");
  // }, [btnActive]);

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
            className={"box" + ("home" === btnActive ? "-selected" : "")}
            onClick={() => setBtnActive("home")}
          >
            <div className="contents" value={"home"}>
              {"home" === btnActive ? 
                <HomeSelected /> : <Home/>
              }
              우리집
            </div>
          </div>
          <div
            className={
              "box"+ ("building" === btnActive ? "-selected" : "")
            }
            onClick={() => setBtnActive("building")}
          >
            <div className="contents" value={"building"}>
              {"building" === btnActive ? 
                <BuildingSelected /> : <Building/>
              }
              회사
            </div>
          </div>
          <div
            className={"box" + ("etc" === btnActive ? "-selected" : "")}
            onClick={() => setBtnActive("etc")}
          >
            <div className="contents" value={"etc"}>
              {"etc" === btnActive ? 
                <EtcSelected /> : <Etc/>
              }
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
