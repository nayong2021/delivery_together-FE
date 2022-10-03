import instance from "../ApiInstance";

export const GetYogiyoStoreListApi = async (category) => {
  try {
    const response = await instance.get(`/storeList`, {
      params: {
        items: 60,
        order: "rank",
        page: 0,
        search: "",
        category: category,
      },
    });
    return response;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
