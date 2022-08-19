import axios from "axios";

export const GetSearchOrderOfLargePeopleApi = async (keyword) => {
  try {
    const { data } = await axios.get(
      `groupbuying/search?query=${keyword}&sort=participant`
    );
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
