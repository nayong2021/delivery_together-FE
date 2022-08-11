import axios from "axios";

export const PostLoginApi = async (data) => {
  try {
    const response = await axios.post("/api/login", data);
    return response;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
