import instance from "../ApiInstance";

export const PostMemberRegister = async (data) => {
  try {
    const response = await instance.post(`/member`, data);
    return response;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
