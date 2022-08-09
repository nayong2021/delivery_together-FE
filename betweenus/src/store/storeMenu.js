import create from "zustand";
import produce from "immer";

const useStoreMenu = create((set) => ({
  smenudata: [],
  setMenudata: (input) => set({ smenudata: input }),
  fixMenudata: (menuName, quantity) =>
    set((state) => {
      const menu = state.smenudata.find((menus) => menus.menuNmae === menuName);
      console.log(menu);
      return {
        ...menu,
      };
    }),
}));

export default useStoreMenu;
