import create from "zustand";

const APP_ID = process.env.APP_ID;
const useStoreChatClient = create((set) => ({
  client: new window.TalkPlus.Client({appId: APP_ID}),
  setUser: (input) => set({ client: input }),
}));

export default useStoreChatClient;
