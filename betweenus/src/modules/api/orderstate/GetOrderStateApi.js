import instance from "../ApiInstance";

export const GetOrderStateApi = async (index) => {
  try {
    const { data } = await instance.get(`/groupbuying/order-progress/${index}`);
    return data;
  } catch (e) {
    console.log("[FAIL] GET order progress data", e);
    return e;
  }
};
