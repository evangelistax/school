import { useState } from "react";
import { contex } from "./utils";

export const GlobalContex = ({ children }) => {
  const [oscuro, setOscuro] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isActive, setIsActive] = useState(true);

  const changeTheme = () => {
    setOscuro(!oscuro);
    console.log(oscuro);
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const switchs = () => {
    setIsActive(!isActive);
  };

  return (
    <contex.Provider
      value={{ oscuro, changeTheme, isOpen, handleClick, isActive, switchs }}
    >
      {children}
    </contex.Provider>
  );
};
