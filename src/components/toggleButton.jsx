import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { useContext } from "react";
import { contex } from "../contexts/utils";

export default function ToggleButton() {
  const { isOpen, handleClick } = useContext(contex);
  const classname = isOpen ? "toggleButton" : "toggleButton collapsed";
  const content = isOpen ? (
    <FaArrowLeft></FaArrowLeft>
  ) : (
    <FaArrowRight></FaArrowRight>
  );
  return (
    <button className={classname} onClick={handleClick}>
      {content}
    </button>
  );
}
