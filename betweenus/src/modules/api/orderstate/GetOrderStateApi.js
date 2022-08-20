import axios from "axios";

export const GetOrderStateApi = async (index) => {
  try {
    const { data } = await axios.get(`/api/groupbuying/order-progress/${index}`);
    return data;
  } catch (e) {
    console.log("[FAIL] GET order progress data", e);
    return e;
  }
};
