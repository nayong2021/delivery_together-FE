import create from "zustand";
import { produce } from "immer";

const useStoreMenu = create((set) => ({
  menudata: [],
  setMenudata: (input) => set({ menudata: input }),
  plusMenudata: (title) =>
    set(
      produce((draft) => {
        const menus = draft.menudata.find((el) => el.menuName === title);
        menus.quantity += 1;
      })
    ),
  minusMenudata: (title, value) =>
    set(
      produce((draft) => {
        const menus = draft.menudata.find((el) => el.menuName === title);
        if (value > 0) {
          menus.quantity -= 1;
        }
      })
    ),
}));

export default useStoreMenu;
