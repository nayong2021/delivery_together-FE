import instance from "../ApiInstance";

export const PostDeliveryArrivedApi = async (index) => {
  try {
    const { data } = await instance.post(
      `/groupbuying/deliveryArrived/${index}`
    );
    return data;
  } catch (e) {
    console.log("[FAIL] POST delivery arrived", e);
    return e;
  }
};
