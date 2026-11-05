import { create } from "zustand";

const useSidebar = create((set) => ({
  open: true,
  toOpen: () => {
    set(() => ({
      open: true,
    }));
  },
  toClose: () => {
    set(() => ({
      open: false,
    }));
  },

  switch: () => {
    set((state) => ({ open: !state.open }));
  },
}));

export default useSidebar;
