import instance from "../ApiInstance";

export const GetYogiyoStoreListApi = async (category, page) => {
  try {
    const response = await instance.get(`/storeList`, {
      params: {
        items: 60,
        order: "rank",
        page: page,
        search: "",
        category: category,
      },
    });
    return response;
  } catch (e) {
    throw e;
  }
};
