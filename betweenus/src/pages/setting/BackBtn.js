import * as React from "react";
import "../../assets/css/common.css";
import { useNavigate } from "react-router-dom";

const BackBtn = ({text}) => {
  const navigate = useNavigate();
  return (
    <>
        <div className="hd">
          <div className="hd-tit">
            <button
              type="button"
              className="hd-back"
              onClick={() => navigate(-1)}
            ></button>
            {text}
          </div>
        </div>
    </>
  );
};

export default BackBtn;
