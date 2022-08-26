import axios from "axios";

export const PostAddressSettingApi = async (data) => {
  try {
    const response = await axios.post("/api/address", data);
    console.log(response);
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
