import instance from "../ApiInstance";

export const PostAddressSettingApi = async (data) => {
  try {
    const response = await instance.post("/address", data);
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
