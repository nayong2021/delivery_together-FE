import axios from "axios";

export const PostDeliveryArrivedApi = async (index) => {
  try {
    const { data } = await axios.post(`${process.env.REACT_APP_API_HOST}/groupbuying/deliveryArrived/${index}`);
    return data;
  } catch (e) {
    console.log("[FAIL] POST delivery arrived", e);
    return e;
  }
};
