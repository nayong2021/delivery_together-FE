import instance from "../ApiInstance";

export const RegionPostApi = async (data) => {
  try {
    const response = await instance.post(`/member/address`, data);
    return response;
  } catch (e) {
    console.log("[FAIL] POST Region Api", e);
    return e;
  }
};
