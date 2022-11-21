import instance from "../ApiInstance";

export const PostNaverOAuthLoginApi = async (code, state) => {
  try {
    const response = await instance.get(`/naver/auth`, {
      params: {
        code: code,
        state: state,
      },
    });
    return response;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
