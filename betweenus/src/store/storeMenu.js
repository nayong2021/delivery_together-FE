import create from "zustand";
import { produce, original } from "immer";

const useStoreMenu = create((set) => ({
  smenudata: [],
  setMenudata: (input) => set({ smenudata: input }),
  fixMenudata: (title, value) =>
    set(
      produce((state) => {
        console.log(
          original(
            state.smenudata.findIndex(
              (menus) => menus.menuName === "황금올리브닭다리"
            )
          )
        );
      })
    ),
}));

export default useStoreMenu;
