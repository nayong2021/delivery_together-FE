import instance from "../ApiInstance";

export const PostUnregisterApi = async () => {
  try {
    const response = await instance.post(`/member/unregister`);
    return response;
  } catch (e) {
    // console.log("[FAIL] GET user data", e);
    throw e;
  }
};
