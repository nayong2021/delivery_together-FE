import instance from "../ApiInstance";

export const PostDeliveryTimeApi = async (index, inputTime) => {
  try {
    const { data } = await instance.post(
      `/groupbuying/deliveryTime/${index}?requiredTime=${inputTime}`
    );
    return data;
  } catch (e) {
    console.log("[FAIL] POST delivery time", e);
    return e;
  }
};
