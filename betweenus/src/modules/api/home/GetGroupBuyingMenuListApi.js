import instance from "../ApiInstance";

export const GetGroupBuyingMenuListApi = async (id) => {
  try {
    const { data } = await instance.get(`/groupbuying/menu/${id.index}`);
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
