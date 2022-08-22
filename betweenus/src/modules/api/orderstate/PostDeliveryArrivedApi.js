import axios from "axios";

export const PostDeliveryArrivedApi = async (index) => {
  try {
    const { data } = await axios.post(`/api/groupbuying/deliveryArrived/${index}`);
    return data;
  } catch (e) {
    console.log("[FAIL] POST delivery arrived", e);
    return e;
  }
};
