import axios from "axios";

export const GetGroupBuyingMenuListApi = async (id) => {
  try {
    const { data } = await axios.get(`/api/groupbuying/menu/${id.index}`);
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
