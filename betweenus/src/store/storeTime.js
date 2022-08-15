import create from "zustand";

const useStoreTime = create((set) => ({
  hour: 0,
  minute: 0,
  setHours: (input) => set({ hour: input }),
  setMinutes: (input) => set({ minute: input }),
}));

export default useStoreTime;
