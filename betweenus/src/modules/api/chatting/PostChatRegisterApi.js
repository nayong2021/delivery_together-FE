import instance from "../ApiInstance";

export const PostChatRegister = async (index, data) => {
  try {
    const { response } = await instance.get(`/groupbuying/chat/${index}`, data);
    return response;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
