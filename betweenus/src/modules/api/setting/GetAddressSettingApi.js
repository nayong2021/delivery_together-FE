import instance from "../ApiInstance";

export const GetAddressSettingApi = async (id) => {
  try {
    const { data } = await instance.get(`/address/${id}`);
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
