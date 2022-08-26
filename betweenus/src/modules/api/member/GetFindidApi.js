import axios from "axios";

export const GetFindidApi = async (name, phone, birth) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_HOST}/member/findId?name=${name}&phoneNumber=${phone}&birth=${birth}/`
    );
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
