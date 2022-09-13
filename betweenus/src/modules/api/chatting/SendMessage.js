import client from "../ChatClientInstance";

export const SendMessage = async () => {
  try {
    const { response } = await client.sendMessage({
      channelId: String(233),
      type: "text",
      text: "안녕하세요?",
      //   data: { imageUrl: "" },
    });
    return response;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
