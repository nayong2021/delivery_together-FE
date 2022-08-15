import create from "zustand";

const useStoreTime = create((set) => ({
  hour: "00",
  minute: "00",
  setHours: (input) => set({ hour: input }),
  setMinutes: (input) => set({ minute: input }),
}));

export default useStoreTime;
