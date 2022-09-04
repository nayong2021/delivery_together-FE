import instance from "../ApiInstance";

export const PatchRepresentationRegion = async (addressIdx) => {
  try {
    const response = await instance.patch(
      `/member/address?addressIdx=${addressIdx}`
    );
    return response;
  } catch (e) {
    console.log("[FAIL] POST Region Api", e);
    return e;
  }
};
