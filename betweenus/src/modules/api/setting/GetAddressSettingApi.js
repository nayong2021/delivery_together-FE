import axios from "axios";

export const GetAddressSettingApi = async (id) => {
  try {
    const { data } = await axios.get(`/api/address/${id}`);
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
