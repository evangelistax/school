import { create } from "zustand";

const useNotifications = create((set) => ({
  open: false,
  toOpen: () => {
    set(() => ({ open: true }));
  },
  toClose: () => {
    set(() => ({ open: false }));
  },
}));

export default useNotifications;
