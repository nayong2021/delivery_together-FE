import * as React from "react";
import "../../assets/css/common.css";
import { useNavigate, Outlet } from "react-router-dom";

const OrderHistoryDetail = () => {
  const navigate = useNavigate();
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
            주문 내역
          </div>
        </div>
      </header>
      <section className="outlet">
        <Outlet />
      </section>
    </>
  );
};

export default OrderHistoryDetail;
