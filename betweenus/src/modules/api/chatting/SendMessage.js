import client from "../ChatClientInstance";

export const SendMessage = async (sendtxt, setChatList) => {
  try {
    await client.sendMessage(
      {
        channelId: String(233),
        type: "text",
        text: sendtxt,
      },
      function (err, data) {
        return data;
      }
    );
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
