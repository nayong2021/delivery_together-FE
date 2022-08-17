import axios from "axios";

export const GetSelectMemberApi = async (
  name,
  birth,
  email,
  phoneNumber,
  authToken
) => {
  try {
    const { data } = await axios.get(
      `/api/member/pwInquiry/selectUser?name=${name}&birth=${birth}&email=${email}&phoneNumber=${phoneNumber}&authToken=${authToken}`
    );
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
