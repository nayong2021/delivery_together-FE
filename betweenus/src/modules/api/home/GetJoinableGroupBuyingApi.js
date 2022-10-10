import instance from "../ApiInstance";

export const GetJoinableGroupBuyingApi = async () => {
  try {
    const { data } = await instance.get(
      `/groupbuying?items=20&page=0&sort=latest`
    );
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
