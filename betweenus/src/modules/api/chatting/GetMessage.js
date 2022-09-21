export const GetMessage = async (client, postIdx) => {
  try {
    const resp = await client.getMessages({
      channelId: String(postIdx),
      order: "oldest",
      limit: 50, // how many messages to fetch, default: 20, max: 50
    });
    return resp;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
