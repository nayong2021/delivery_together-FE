import axios from "axios";

export const GetSendEmailTokenApi = async (email) => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API_HOST}/member/email-auth?email=${email}`);
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
