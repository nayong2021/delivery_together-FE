import axios from "axios";

export const GetGroupBuyingDetailApi = async (id) => {
  try {
    const { data } = await axios.get(`/api/groupbuying/${id.index}`);
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
