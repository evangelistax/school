import { useState } from "react";
import { contex } from "./utils";

export const GlobalContex = ({ children }) => {
  const [oscuro, setOscuro] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [formIsVisible, setFormIsVisible] = useState(false);

  const changeForm = () => {
    setFormIsVisible(!formIsVisible);
  };

  const changeVisibility = () => {
    setIsVisible(!isVisible);
  };
  const changeTheme = () => {
    setOscuro(!oscuro);
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const switchs = () => {
    setIsActive(!isActive);
  };

  return (
    <contex.Provider
      value={{
        oscuro,
        changeTheme,
        isOpen,
        handleClick,
        isActive,
        switchs,
        isVisible,
        changeVisibility,
        formIsVisible,
        changeForm,
      }}
    >
      {children}
    </contex.Provider>
  );
};
