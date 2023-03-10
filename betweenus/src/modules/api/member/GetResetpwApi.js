import instance from "../ApiInstance";

export const GetResetpwApi = async (password, passwordConfirmation) => {
  try {
    const { data } = await instance.post(
      `/member/resetPw?password=${password}&passwordConfirmation=${passwordConfirmation}`
    );
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
