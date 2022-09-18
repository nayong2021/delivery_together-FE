import client from "../ChatClientInstance";

export const SendMessage = async (sendtxt) => {
  try {
    const { response } = await client.sendMessage({
      channelId: String(233),
      type: "text",
      text: sendtxt,
    });
    return response;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
