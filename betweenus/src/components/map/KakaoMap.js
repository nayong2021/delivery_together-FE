import * as React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useState, useEffect } from "react";
import MapItemDetail from "./MapItemDetail";
import { GetRepresentAddressApi } from "../../modules/api/map/GetRepresentAddressApi";
import { GetJoinableGroupBuyingApi } from "../../modules/api/home/GetJoinableGroupBuyingApi";

const KakaoMap = () => {
  const [list, setList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  let temp = {};

  const getList = async () => {
    temp = await GetJoinableGroupBuyingApi();
    console.log(temp);
    setList(temp);
    console.log(list);
  };

  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  const [marker, setMarker] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  const currentLocation = () => {
    // console.log("current!");
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  };

  const getAddress = async () => {
    const data = await GetRepresentAddressApi();
    setMarker((prev) => ({
      ...prev,
      center: {
        lat: data.latitude, // 위도
        lng: data.longitude, // 경도
      },
      isLoading: false,
    }));
    setState((prev) => ({
      ...prev,
      center: {
        lat: data.latitude, // 위도
        lng: data.longitude, // 경도
      },
      isLoading: false,
    }));
  };

  useEffect(() => {
    getAddress();
    getList();
  }, []);

  return (
    <>
      <button
        type="button"
        className="btn-location"
        style={{ position: "absolute", zIndex: "3" }}
        onClick={currentLocation}
      ></button>
      {/* <MapItemDetail /> */}
      <Map center={state.center} style={{ width: "100%", height: "100vh" }}>
        {!state.isLoading && (
          <MapMarker position={marker.center}>
            {/* <div style={{ color: "#000" }}></div> */}
          </MapMarker>
        )}
        {list &&
          list.map((position, index) => (
            // console.log(position)
            <MapMarker
              key={`${position.title}-${{
                lat: position.latitude,
                lng: position.longitude,
              }}`}
              position={{ lat: position.latitude, lng: position.longitude }} // 마커를 표시할 위치
              image={{
                src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
                size: {
                  width: 24,
                  height: 35,
                }, // 마커이미지의 크기입니다
              }}
              title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
              clickable={true}
              onClick={() => setIsOpen(true)}
            />
          ))}
        {isOpen && (
          <div style={{ minWidth: "150px" }}>
            <img
              alt="close"
              width="14"
              height="13"
              src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
              style={{
                position: "absolute",
                right: "5px",
                top: "5px",
                cursor: "pointer",
              }}
              onClick={() => setIsOpen(false)}
            />
            <div style={{ padding: "5px", color: "#000" }}>Hello World!</div>
          </div>
        )}
      </Map>
    </>
  );
};

export default KakaoMap;
