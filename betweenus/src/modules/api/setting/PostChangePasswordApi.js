import instance from "../ApiInstance";

export const PostChangePassword = async (data) => {
  try {
    const response = await instance.post(`/update/member/password`, data);
    return response;
  } catch (e) {
    // console.log("[FAIL] GET user data", e);
    throw e;
  }
};
