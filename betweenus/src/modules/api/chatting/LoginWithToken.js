// import client from "../ChatClientInstance";
import { GetCurrentUserApi } from "../common/GetCurrentUserApi";

export const LoginWithToken = async (client) => {
  try {
    const data = GetCurrentUserApi();
    await data.then(async (r) => {
      const userIdx = r.memberIdx;
      const userToken = r.talkPlusLoginToken;
      await client.loginWithToken({
        userId: String(userIdx), // unique userId
        loginToken: userToken, // login token issued by admin REST API
      });
    });
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
