export const GetMessage = async (client) => {
  try {
    const resp = await client.getMessages({
      channelId: String(233),
      order: "oldest",
      limit: 10, // how many messages to fetch, default: 20, max: 50
    });
    return resp;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
