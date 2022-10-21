import instance from "../ApiInstance";

export const PostKakaoOAuthLoginApi = async (oauthCode) => {
  try {
    const response = await instance.get(`/oauth2/code/kakao`, {
      params: {
        code: oauthCode,
      },
    });
    return response;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
