import axios from "axios";

export const PatchRepresentationRegion = async (addressIdx) => {
  try {
    const response = await axios.patch(`${process.env.REACT_APP_API_HOST}/member/address?addressIdx=${addressIdx}`);
    return response;
  } catch (e) {
    console.log("[FAIL] POST Region Api", e);
    return e;
  }
};
