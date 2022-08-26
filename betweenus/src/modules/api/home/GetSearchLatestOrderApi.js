import axios from "axios";

export const GetSearchLatestOrderApi = async (keyword) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_HOST}/groupbuying/search?query=${keyword}`
    );
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
