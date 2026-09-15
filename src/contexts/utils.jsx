import { createContext, useContext } from "react";
export const contex = createContext(null);
export const useApp = () => useContext(contex);
