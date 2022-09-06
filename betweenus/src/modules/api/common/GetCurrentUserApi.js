import instance from "../ApiInstance";

export const GetCurrentUser = async () => {
  try {
    const { data } = await instance.get(`/currentUser`);
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
