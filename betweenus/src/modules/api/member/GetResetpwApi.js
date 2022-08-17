import axios from "axios";

export const GetResetpwApi = async (password, passwordConfirmation) => {
  try {
    const { data } = await axios.get(
      `/api/member/pwInquiry/resetPw?password=${password}&passwordConfirmation=${passwordConfirmation}`
    );
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
