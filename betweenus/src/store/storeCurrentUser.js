import create from "zustand";

const useStoreCurrentUser = create((set) => ({
  user: {},
  setUser: (input) => set({ user: input }),
}));

export default useStoreCurrentUser;
