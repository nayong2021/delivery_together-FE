import axios from "axios";

export const postChatContentsApi = async (index, contents) => {
  try {
    const { data } = await axios.post(`/api/groupbuying/chat/${index}`,{
      contentType: "TEXT",
      "contents": contents
    });
    return data;
  } catch (e) {
    console.log("[FAIL] POST delivery time", e);
    return e;
  }
};
