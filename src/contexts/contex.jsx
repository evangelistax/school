import { useState } from "react";
import { contex } from "./utils";

// variables del estado global
export const GlobalContex = ({ children }) => {
  const [oscuro, setOscuro] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState([]);

  const [currentStep, setCurrentStep] = useState(1);

  // Funciones para avanzar y retroceder
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const [studentData, setStudentData] = useState({
    FirstName: "",
    LastName: "",
    Age: null,
    Sex: "",
    Phone: "",
    Residence: "",
  });

  const updateStudentLabel = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const [tutorData, setTutorData] = useState({
    FirstName: "",
    LastName: "",
    Phone: "",
    Residence: "",
  });

  const updateTutorLabel = (e) => {
    const { name, value } = e.target;
    setTutorData({ ...tutorData, [name]: value });
  };

  const [enrollementData, setEnrollementData] = useState({
    Amount: null,
    Paid: null,
    DateOf: null,
    Observations: "",
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
        currentStep,
        nextStep,
        prevStep,
        data,
        setData,
      }}
    >
      {children}
    </contex.Provider>
  );
};
