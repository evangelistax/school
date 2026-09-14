import { FaBell } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";
import { FaLanguage } from "react-icons/fa6";
import { IoSparkles } from "react-icons/io5";
//import { FaRobot } from "react-icons/fa6";

export default function Icons({ toggle, theme, valor }) {
  console.log(valor, "desde icons");
  return (
    <>
      <button className="icons" onClick={toggle}>
        <FaBell></FaBell>
      </button>
      <button className="icons" onClick={theme}>
        {valor ? <FaSun></FaSun> : <FaMoon></FaMoon>}
      </button>
      <button className="icons">
        <FaLanguage></FaLanguage>
      </button>
      <button className="icons">
        <IoSparkles></IoSparkles>
      </button>
    </>
  );
}
