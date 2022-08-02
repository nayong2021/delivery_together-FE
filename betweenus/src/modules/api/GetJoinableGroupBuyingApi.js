import axios from "axios";

export const GetJoinableGroupBuyingApi = async () => {
  try {
    const { data } = await axios.get("/api/groupbuying/");
    console.log(data);
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
