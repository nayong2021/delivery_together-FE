import axios from "axios";

export const GetSendEmailTokenApi = async (email) => {
  try {
    const { data } = await axios.get(`/api/member/email-auth?email=${email}`);
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
