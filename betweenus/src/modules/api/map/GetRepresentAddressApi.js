import instance from "../ApiInstance";

export const GetRepresentAddressApi = async (id) => {
  try {
    const { data } = await instance.get(`/member/representationAddress`);
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
