import axios from "axios";

export const GetOrderOfLargePeopleApi = async () => {
  try {
    const { data } = await axios.get("/api/groupbuying?sort=participant");
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};