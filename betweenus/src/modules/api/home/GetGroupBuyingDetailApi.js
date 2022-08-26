import axios from "axios";

export const GetGroupBuyingDetailApi = async (id) => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API_HOST}/groupbuying/${id.index}`);
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
