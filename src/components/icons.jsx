import { FaBell } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";
import { FaLanguage } from "react-icons/fa6";
import { IoSparkles } from "react-icons/io5";
import { useApp } from "../contexts/utils";
export default function Icons() {
  const { oscuro, changeTheme, switchs } = useApp();
  return (
    <>
      <button className="icons" onClick={switchs}>
        <FaBell></FaBell>
      </button>
      <button className="icons" onClick={changeTheme}>
        {oscuro ? <FaSun></FaSun> : <FaMoon></FaMoon>}
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
