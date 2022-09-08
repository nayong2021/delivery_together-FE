import instance from "../ApiInstance";

export const RequestKakaocertForPhoneUpdate = async (phoneNumber) => {
  try {
    const response = await instance.post(`/update/member/phone/auth?phoneNum=${phoneNumber}`);
    return response;
  } catch (e) {
    // console.log("[FAIL] GET user data", e);
    throw e;
  }
};
