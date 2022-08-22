import axios from "axios";

export const GetCurrentUserApi = async () => {
  try {
    const { data } = await axios.get("/api/currentUser");
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
