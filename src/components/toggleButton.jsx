import { useContext } from "react";
import { contex } from "../contexts/utils";
import { LuPanelLeft } from "react-icons/lu";

export default function ToggleButton() {
  const { isOpen, handleClick } = useContext(contex);
  const classname = isOpen ? "toggleButton" : "toggleButton collapsed";
  const content = isOpen ? <LuPanelLeft /> : <LuPanelLeft />;
  return (
    <button className={classname} onClick={handleClick}>
      {content}
    </button>
  );
}
