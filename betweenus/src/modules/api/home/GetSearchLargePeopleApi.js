import axios from "axios";

export const GetSearchLargePeopleApi = async (keyword) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_HOST}/groupbuying/search?query=${keyword}&sort=participant`
    );
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
