import * as React from "react";
import MetaTag from "../components/common/MetaTag";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Add = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/home");
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
            모집하기
          </div>
        </div>
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="item-write">
          <div className="wrap">
            <div className="frm2">
              <div className="frm-group">
                <input
                  type="text"
                  placeholder="제목"
                  className="inp-frm"
                  {...register("title")}
                />
              </div>

              <div className="frm-group frm-group-time">
                <div className="tit-frm">
                  주문시간 <br />
                  설정
                </div>
                <div className="inp-group-time">
                  <input
                    type="text"
                    placeholder="주문시간 설정"
                    className="inp-frm"
                    {...register("orderTime")}
                  />
                </div>
              </div>

              <div className="frm-group">
                <input
                  type="text"
                  placeholder="가게 이름"
                  className="inp-frm"
                  {...register("storeName")}
                />
              </div>

              <div className="frm-group">
                <div className="inp-group">
                  <input
                    type="text"
                    placeholder="픽업 장소"
                    className="inp-frm"
                    {...register("pickupPlace")}
                  />
                  <button type="button" className="btn-frm">
                    주소 찾기
                  </button>
                </div>
              </div>

              <div className="frm-group">
                <input
                  type="text"
                  placeholder="상세 픽업 장소"
                  className="inp-frm"
                  {...register("detailPickupPlace")}
                />
              </div>
            </div>

            <div className="add-info">
              <div className="tit">추가정보</div>
              <textarea
                className="txt"
                {...register("additionalInfo")}
              ></textarea>
            </div>

            <div className="btn-group-bottom">
              <button type="submit" className="btn-custom">
                모집하기
              </button>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Add;
