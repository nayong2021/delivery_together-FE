import axios from "axios";

export const postChatContentsApi = async (index, contents) => {
  try {
    const { data } = await axios.post(`${process.env.REACT_APP_API_HOST}/groupbuying/chat/${index}`,{
      contentType: "TEXT",
      "contents": contents
    });
    return data;
  } catch (e) {
    console.log("[FAIL] POST delivery time", e);
    return e;
  }
};
