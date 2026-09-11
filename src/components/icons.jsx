import { FaBell } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { FaCog } from "react-icons/fa";

export default function Icons({ toggle }) {
  return (
    <>
      <button className="icons" onClick={toggle}>
        <FaBell></FaBell>
      </button>
      <button className="icons">
        <FaMoon></FaMoon>
      </button>
      <button className="icons">
        <FaCog></FaCog>
      </button>
    </>
  );
}
