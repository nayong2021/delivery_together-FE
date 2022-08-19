import create from "zustand";

const useStoreSearchKeyword = create((set) => ({
  keyword: "최신순",
  setKeyword: (input) => set({ keyword: input }),
}));

export default useStoreSearchKeyword;
