import * as React from "react";
import "../../assets/css/common.css";
import { useNavigate, useLocation } from "react-router-dom";
import MetaTag from "../../components/common/MetaTag";
import { useState } from "react";
import { GetResetpwApi } from "../../modules/api/member/GetResetpwApi";

const PwResult = () => {
  const navigate = useNavigate();
  const [guideMS, setGuideMs] = useState("");

  const [inputs, setInputs] = useState({
    password: "",
    passwordConfirmation: "",
  });

  const { password, passwordConfirmation } = inputs;

  const onChangeInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onClickButton = async () => {
    const data = await GetResetpwApi(
      inputs.password,
      inputs.passwordConfirmation
    );
    console.log(data);
    console.log(inputs);
    if (data) {
      navigate("/login");
    } else {
      setGuideMs("비밀번호가 일치하지 않습니다. 다시한번 확인해주세요 :)");
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
            비밀번호 재설정
          </div>
        </div>
      </header>

      <section className="find">
        <div className="wrap">
          <div className="pw-result">
            <div className="frm">
              <div className="frm-guide">비밀번호를 변경해 주세요.</div>

              <div className="frm-group">
                <div className="tit-frm">새 비밀번호</div>
                <input
                  type="password"
                  placeholder="영어, 숫자, 특수문자 포함 9~15자"
                  className="inp-frm"
                  name="password"
                  onChange={onChangeInput}
                  value={password}
                />
              </div>

              <div className="frm-group">
                <div className="tit-frm">새 비밀번호 확인</div>
                <input
                  type="password"
                  className="inp-frm"
                  onChange={onChangeInput}
                  name="passwordConfirmation"
                  value={passwordConfirmation}
                />
              </div>
              <div className="frm-message">{guideMS}</div>
            </div>
          </div>

          <div className="btn-group-bottom">
            <button className="btn-custom" onClick={onClickButton}>
              로그인
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PwResult;
