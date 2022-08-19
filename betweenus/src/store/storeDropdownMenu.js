import create from "zustand";

const useStoreDropdownMenu = create((set) => ({
  option: "최신순",
  setOption: (input) => set({ option: input }),
}));

export default useStoreDropdownMenu;
