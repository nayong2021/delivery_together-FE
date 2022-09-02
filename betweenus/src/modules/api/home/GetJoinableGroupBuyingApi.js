import axios from "axios";

export const GetJoinableGroupBuyingApi = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_HOST}/groupbuying/`
    );
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
