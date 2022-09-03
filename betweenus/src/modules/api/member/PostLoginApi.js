import instance from "../ApiInstance";

export const PostLoginApi = async (data) => {
  try {
    const response = await instance.post(`/login`, data);
    return response;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
