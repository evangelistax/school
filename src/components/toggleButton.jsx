import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function ToggleButton({ toggle, status }) {
  const classname = status ? "toggleButton" : "toggleButton collapsed";
  const content = status ? (
    <FaArrowLeft></FaArrowLeft>
  ) : (
    <FaArrowRight></FaArrowRight>
  );
  return (
    <button className={classname} onClick={toggle}>
      {content}
    </button>
  );
}
