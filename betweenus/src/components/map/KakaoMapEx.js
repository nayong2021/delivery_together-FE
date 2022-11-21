import * as React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useState, useEffect } from "react";
import MapItemDetail from "./MapItemDetail";
import { GetRepresentAddressApi } from "../../modules/api/map/GetRepresentAddressApi";
import { GetJoinableGroupBuyingApi } from "../../modules/api/home/GetJoinableGroupBuyingApi";
import { useMap } from "react-kakao-maps-sdk";
import styled from "styled-components";

const KakaoMapEx = () => {
  const MARKER_WIDTH = 33; // 기본, 클릭 마커의 너비
  const MARKER_HEIGHT = 36; // 기본, 클릭 마커의 높이
  const OFFSET_X = 12; // 기본, 클릭 마커의 기준 X좌표
  const OFFSET_Y = MARKER_HEIGHT; // 기본, 클릭 마커의 기준 Y좌표
  const OVER_MARKER_WIDTH = 40; // 오버 마커의 너비
  const OVER_MARKER_HEIGHT = 42; // 오버 마커의 높이
  const OVER_OFFSET_X = 13; // 오버 마커의 기준 X좌표
  const OVER_OFFSET_Y = OVER_MARKER_HEIGHT; // 오버 마커의 기준 Y좌표
  const SPRITE_MARKER_URL =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markers_sprites2.png"; // 스프라이트 마커 이미지 URL
  const SPRITE_WIDTH = 126; // 스프라이트 이미지 너비
  const SPRITE_HEIGHT = 146; // 스프라이트 이미지 높이
  const SPRITE_GAP = 10; // 스프라이트 이미지에서 마커간 간격

  const positions = [
    { lat: 33.44975, lng: 126.56967 },
    { lat: 33.450579, lng: 126.56956 },
    { lat: 33.4506468, lng: 126.5707 },
  ];

  const EventMarkerContainer = ({ position, index, onClick, isClicked }) => {
    const map = useMap();
    const [isOver, setIsOver] = useState(false);
    const gapX = MARKER_WIDTH + SPRITE_GAP; // 스프라이트 이미지에서 마커로 사용할 이미지 X좌표 간격 값
    const originY = (MARKER_HEIGHT + SPRITE_GAP) * index; // 스프라이트 이미지에서 기본, 클릭 마커로 사용할 Y좌표 값
    const overOriginY = (OVER_MARKER_HEIGHT + SPRITE_GAP) * index; // 스프라이트 이미지에서 오버 마커로 사용할 Y좌표 값
    const normalOrigin = { x: 0, y: originY }; // 스프라이트 이미지에서 기본 마커로 사용할 영역의 좌상단 좌표
    const clickOrigin = { x: gapX, y: originY }; // 스프라이트 이미지에서 마우스오버 마커로 사용할 영역의 좌상단 좌표
    const overOrigin = { x: gapX * 2, y: overOriginY }; // 스프라이트 이미지에서 클릭 마커로 사용할 영역의 좌상단 좌표

    let spriteOrigin = isOver ? overOrigin : normalOrigin;

    if (isClicked) {
      spriteOrigin = clickOrigin;
    }

    return (
      <>
        <MapMarker
          position={position} // 마커를 표시할 위치
          onClick={onClick}
          onMouseOver={() => setIsOver(true)}
          onMouseOut={() => setIsOver(false)}
          image={{
            src: SPRITE_MARKER_URL,
            size: {
              width: MARKER_WIDTH,
              height: MARKER_HEIGHT,
            },
            options: {
              offset: {
                x: OFFSET_X,
                y: OFFSET_Y,
              },
              spriteSize: {
                width: SPRITE_WIDTH,
                height: SPRITE_HEIGHT,
              },
              spriteOrigin: spriteOrigin,
            },
          }}
        ></MapMarker>
        {isClicked ? (
          <div
            className="x-button"
            style={{ zIndex: "4" }}
            onClick={() => setSeleteMarker(null)}
          ></div>
        ) : (
          <></>
        )}
        {isClicked ? <MapItemDetail index={index} /> : <></>}
      </>
    );
  };

  const [selectedMarker, setSeleteMarker] = useState();

  const [list, setList] = useState([]);
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
        {list.map((position, index) => (
          <EventMarkerContainer
            index={index}
            list={list}
            key={`EventMarkerContainer-${position.latitude}-${position.longitude}`}
            position={{ lat: position.latitude, lng: position.longitude }}
            onClick={() => setSeleteMarker(index)}
            isClicked={selectedMarker === index}
          />
        ))}
      </Map>
    </>
  );
};

export default KakaoMapEx;
