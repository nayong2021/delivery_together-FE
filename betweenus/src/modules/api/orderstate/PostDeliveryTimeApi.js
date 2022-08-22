import axios from "axios";

export const PostDeliveryTimeApi = async (index, inputTime) => {
  try {
    const { data } = await axios.post(`/api/groupbuying/deliveryTime/${index}?requiredTime=${inputTime}`);
    return data;
  } catch (e) {
    console.log("[FAIL] POST delivery time", e);
    return e;
  }
};
