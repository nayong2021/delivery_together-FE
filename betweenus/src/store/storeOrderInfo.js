import create from "zustand";

const useStoreOrderInfo = create((set) => ({
  orderInfo: {},
  setOrderInfo: (input) => set({ orderInfo: input }),
}));

export default useStoreOrderInfo;
