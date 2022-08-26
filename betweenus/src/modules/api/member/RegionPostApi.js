import axios from "axios";

export const RegionPostApi = async (data) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_HOST}/member/address`, data);
    return response;
  } catch (e) {
    console.log("[FAIL] POST Region Api", e);
    return e;
  }
};
