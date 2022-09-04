import instance from "../ApiInstance";

export const GetSendEmailTokenApi = async (email) => {
  try {
    const { data } = await instance.get(`/member/email-auth?email=${email}`);
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
