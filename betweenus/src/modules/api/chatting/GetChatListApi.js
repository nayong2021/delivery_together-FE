import axios from "axios";

export const GetChatList = async (index) => {
  try {
    const { data } = await axios.get(`/api/groupbuying/chat/${index}`);
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
