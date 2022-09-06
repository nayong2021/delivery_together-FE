import instance from "../ApiInstance";

export const GetOrderHistoryApi = async () => {
  try {
    const { data } = await instance.get(`/member/myOrder`);
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
