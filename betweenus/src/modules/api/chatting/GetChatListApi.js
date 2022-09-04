import instance from "../ApiInstance";

export const GetChatList = async (index) => {
  try {
    const { data } = await instance.get(`/groupbuying/chat/${index}`);
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
