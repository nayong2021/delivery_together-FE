import * as React from "react";
import "../../assets/css/common.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MetaTag from "../../components/common/MetaTag";
import { PostNickNameApi } from "../../modules/api/setting/PostNickNameApi";

const NickName = () => {
  const navigate = useNavigate();
  const [nickname, setNickName] = useState("");
  const [errorMS, setErrorMS] = useState("");

  const onChangeInput = (e) => {
    setNickName(e.target.value);
  };

  const onClickButton = async () => {
    try {
      await PostNickNameApi(nickname);
      navigate("/setting");
    } catch (e) {
      setErrorMS("중복된 닉네임입니다. 다른 닉네임으로 설정 해주세요.");
    }
  };

  return (
    <div id="root">
      <MetaTag />
      <header className="header">
        <div className="hd">
          <div className="hd-tit">
            <button
              type="button"
              className="hd-back"
              onClick={() => navigate(-1)}
            ></button>
            닉네임 변경
          </div>
        </div>
      </header>
      <section className="sign">
        <form className="wrap">
          <div className="list-frm">
            <div className="frm-group">
              <div className="tit-frm">닉네임</div>
              <input
                type="text"
                name="email"
                className="inp-frm"
                onChange={onChangeInput}
              />
              <div className="error-message">{errorMS}</div>
            </div>
          </div>

          <div className="btn-group-bottom">
            <button
              type="button"
              className="btn-custom"
              onClick={onClickButton}
            >
              저장
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default NickName;
