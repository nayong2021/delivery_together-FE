import axios from "axios";

export const PostGroupBuyingApi = async (data) => {
  try {
    const response = await axios.post("/api/groupbuying", data);
    console.log(response);
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
