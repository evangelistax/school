import { create } from "zustand";

const useAi = create((set) => ({
  isOpen: false,
  toOpen: () => {
    set(() => ({ isOpen: true }));
  },
  toClose: () => {
    set(() => ({ isOpen: false }));
  },
}));

export default useAi;
