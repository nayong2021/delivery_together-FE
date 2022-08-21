import create from "zustand";

const useStoreOrderInfo = create((set) => ({
  orderInfo: {},
  selectedIndex: "",
  setOrderInfo: (input) => set({ orderInfo: input }),
  setSelectedIndex: (input) => set({ selectedIndex: input }),
}));

export default useStoreOrderInfo;
