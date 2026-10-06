import { useState } from "react";
import { contex } from "./utils";

export const GlobalContex = ({ children }) => {
  const [oscuro, setOscuro] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const [studentData, setStudentData] = useState({
    firstname: "",
    lastname: "",
    age: null,
    sex: "",
    phone: "",
    residence: "",
  });

  const updateStudentLabel = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const [tutorData, setTutorData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    residence: "",
  });

  const updateTutorLabel = (e) => {
    const { name, value } = e.target;
    setTutorData({ ...tutorData, [name]: value });
  };

  const [enrollementData, setEnrollementData] = useState({
    amount: null,
    paid: null,
    dateof: null,
    observations: "",
  });

  const updateEnrollementLabel = (e) => {
    const { name, value } = e.target;
    setEnrollementData({ ...studentData, [name]: value });
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
        studentData,
        updateStudentLabel,
        tutorData,
        updateTutorLabel,
        enrollementData,
        updateEnrollementLabel,
      }}
    >
      {children}
    </contex.Provider>
  );
};
