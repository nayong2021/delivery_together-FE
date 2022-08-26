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
      `${process.env.REACT_APP_API_HOST}/member/pwInquiry/selectUser?name=${name}&birth=${birth}&email=${email}&phoneNumber=${phoneNumber}&authToken=${authToken}`
    );
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
