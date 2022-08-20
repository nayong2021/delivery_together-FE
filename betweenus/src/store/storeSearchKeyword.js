import create from "zustand";

const useStoreSearchKeyword = create((set) => ({
  keyword: "",
  setKeyword: (input) => set({ keyword: input }),
}));

export default useStoreSearchKeyword;
