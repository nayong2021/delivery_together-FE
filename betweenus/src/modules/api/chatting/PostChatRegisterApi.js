import axios from "axios";

export const PostChatRegister = async (index, data) => {
  try {
    const { response } = await axios.get(
      `${process.env.REACT_APP_API_HOST}/groupbuying/chat/${index}`,
      data
    );
    return response;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
