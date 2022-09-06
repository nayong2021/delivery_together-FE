import instance from "../ApiInstance";

export const PostNickNameApi = async (data) => {
  try {
    const response = await instance.post(
      `/update/member/nickname?nickName=${data}`
    );
    return response;
  } catch (e) {
    // console.log("[FAIL] GET user data", e);
    throw e;
  }
};
