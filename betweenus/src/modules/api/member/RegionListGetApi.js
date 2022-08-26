import axios from "axios";

export const RegionListGetApi = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_HOST}/member/address`);
    return response;
  } catch (e) {
    console.log("[FAIL] GET RegionList Api", e);
    return e;
  }
};
