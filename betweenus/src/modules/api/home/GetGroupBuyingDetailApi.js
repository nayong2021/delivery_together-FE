import instance from "../ApiInstance";

export const GetGroupBuyingDetailApi = async (id) => {
  try {
    const { data } = await instance.get(`/groupbuying/${id.index}`);
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
