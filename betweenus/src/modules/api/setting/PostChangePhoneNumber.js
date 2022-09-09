import instance from "../ApiInstance";

export const PostChangePhoneNumber = async (phoneNumber, receiptID) => {
  try {
    const response = await instance.post(`/update/member/phone?phoneNum=${phoneNumber}&receiptID=${receiptID}`);
    return response;
  } catch (e) {
    // console.log("[FAIL] GET user data", e);
    throw e;
  }
};
