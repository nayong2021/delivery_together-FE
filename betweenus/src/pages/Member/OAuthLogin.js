import * as React from "react";
import "../../assets/css/common.css";
import { useEffect } from "react";
import MetaTag from "../../components/common/MetaTag";
import queryString from "query-string";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { PostKakaoOAuthLoginApi } from "../../modules/api/member/PostKakaoOAuthLoginApi";
import { PostNaverOAuthLoginApi } from "../../modules/api/member/PostNaverOAuthLoginApi";

const OAuthLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  const kakaoOAuthLogin = async (oauthCode) => {
    const result = await PostKakaoOAuthLoginApi(oauthCode);
    sessionStorage.setItem("accessToken", result.data.accessToken);
    sessionStorage.setItem("refreshToken", result.data.refreshToken);
    navigate("/");
  };

  const naverOAuthLogin = async (code, state) => {
    const result = await PostNaverOAuthLoginApi(code, state);
    sessionStorage.setItem("accessToken", result.data.accessToken);
    sessionStorage.setItem("refreshToken", result.data.refreshToken);
    navigate("/");
  };

  useEffect(() => {
    const oauthPlatform = params.oauthPlatform;
    if (oauthPlatform === "naver") {
      console.log("naver oauth");
      const oauthCode = queryString.parse(location.search);
      naverOAuthLogin(oauthCode.code, oauthCode.state);
      console.log(oauthCode);
    }
    if (oauthPlatform === "kakao") {
      const oauthCode = queryString.parse(location.search);
      kakaoOAuthLogin(oauthCode.code);
    }
    if (oauthPlatform === "apple") {
      console.log("apple oauth");
    }
  }, []);

  return (
    <div id="root">
      <MetaTag />
    </div>
  );
};

export default OAuthLogin;
