import instance from "../ApiInstance";

export const RegionListGetApi = async () => {
  try {
    const response = await instance.get(`/member/address`);
    return response;
  } catch (e) {
    console.log("[FAIL] GET RegionList Api", e);
    return e;
  }
};
