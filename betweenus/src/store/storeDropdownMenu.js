import create from "zustand";

const useStoreDropdownMenu = create((set) => ({
  option: "",
  setOption: (input) => set({ option: input }),
}));

export default useStoreDropdownMenu;
