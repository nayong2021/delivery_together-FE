import instance from "../ApiInstance";

export const postChatContentsApi = async (index, contents) => {
  try {
    const { data } = await instance.post(`/groupbuying/chat/${index}`, {
      contentType: "TEXT",
      contents: contents,
    });
    return data;
  } catch (e) {
    console.log("[FAIL] POST delivery time", e);
    return e;
  }
};
