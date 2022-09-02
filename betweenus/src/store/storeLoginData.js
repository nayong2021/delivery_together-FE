import create from "zustand";

const useStoreLoginData = create((set) => ({
  accessToken: "",
  refreshToken: "",
  setAccessToken: (input) => set({ accessToken: input }),
  setRefreshToken: (input) => set({ refreshToken: input }),
}));

export default useStoreLoginData;
