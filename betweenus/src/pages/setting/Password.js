import * as React from "react";
import "../../assets/css/common.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MetaTag from "../../components/common/MetaTag";
import { PostChangePassword } from "../../modules/api/setting/PostChangePasswordApi";

const Password = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    currentPassword: "",
    newPassword: "",
    newPasswordVerification: "",
  });
  const [errorMS, setErrorMS] = useState("");
  const { currentPassword, newPassword, newPasswordVerification } = inputs;

  const onChangeInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onClickButton = async () => {
    try {
      await PostChangePassword(inputs);
      navigate("/setting");
    } catch (e) {
      setErrorMS("비밀번호를 다시 확인해주세요.");
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
            비밀번호 변경
          </div>
        </div>
      </header>
      <section className="sign">
        <form className="wrap">
          <div className="frm">
            <div className="frm-group">
              <div className="tit-frm">기존 비밀번호</div>
              <input
                type="password"
                name="currentPassword"
                className="inp-frm"
                placeholder="영어 대문자와 소문자, 숫자, 특수문자 포함 9~15자"
                value={currentPassword}
                onChange={onChangeInput}
              />
              <div className="tit-frm">새 비밀번호</div>
              <input
                type="password"
                name="newPassword"
                className="inp-frm"
                placeholder="영어 대문자와 소문자, 숫자, 특수문자 포함 9~15자"
                value={newPassword}
                onChange={onChangeInput}
              />
              <div className="tit-frm">새 비밀번호 확인</div>
              <input
                type="password"
                name="newPasswordVerification"
                className="inp-frm"
                value={newPasswordVerification}
                onChange={onChangeInput}
              />
            </div>
            <div className="frm-message">{errorMS}</div>
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

export default Password;
