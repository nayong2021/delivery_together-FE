import instance from "../ApiInstance";

export const GetSearchLargePeopleApi = async (keyword) => {
  try {
    const { data } = await instance.get(
      `/groupbuying/search?query=${keyword}&sort=participant`
    );
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
