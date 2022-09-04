import instance from "../ApiInstance";

export const GetSearchLatestOrderApi = async (keyword) => {
  try {
    const { data } = await instance.get(`/groupbuying/search?query=${keyword}`);
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
