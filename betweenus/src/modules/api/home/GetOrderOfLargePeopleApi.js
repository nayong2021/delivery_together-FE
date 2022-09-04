import instance from "../ApiInstance";

export const GetOrderOfLargePeopleApi = async () => {
  try {
    const { data } = await instance.get(`/groupbuying?sort=participant`);
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
