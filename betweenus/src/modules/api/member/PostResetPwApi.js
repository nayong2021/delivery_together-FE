import instance from "../ApiInstance";

export const PostResetPwApi = async (
  name,
  birth,
  email,
  phoneNumber,
  receiptID
) => {
  try {
    const { data } = await instance.post(
      `/member/resetPw?name=${name}&birth=${birth}&email=${email}&phoneNumber=${phoneNumber}&receiptID=${receiptID}`
    );
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
