import * as React from "react";
import { useParams } from "react-router-dom";
import { PostDeliveryArrivedApi } from "../../modules/api/orderstate/PostDeliveryArrivedApi";
import { GetOrderStateApi } from "../../modules/api/orderstate/GetOrderStateApi";
import useStoreOrderInfo from "../../store/storeOrderInfo";

export default function DeliveryArrivedBtn() {
    const { orderInfo, setOrderInfo } = useStoreOrderInfo();
    const id = useParams();

    const onClickDeliveryArrived = async () => {
        const result = await PostDeliveryArrivedApi(orderInfo.postIdx);
        if(result) {
        const data = await GetOrderStateApi(id.index);
        setOrderInfo(data);
        }
    }
    return (
        (orderInfo.currentUserIsHost && orderInfo.postStatus === "ORDERED") ? (
        <button type="button" 
        className="btn-arrival" 
        onClick={onClickDeliveryArrived}>
            도착 완료 시 여기를 눌러주세요!
        </button>
        ) : null      
    );
}
