import { useApp } from "../contexts/utils";
import {
  FaWallet,
  FaChartColumn,
  FaChalkboard,
  FaUserGraduate,
} from "react-icons/fa6";

import profile from "../assets/profile.jpg";
export default function Aside() {
  const { isOpen, changeVisibility } = useApp();
  const classname = isOpen ? "aside" : "aside collapsed";
  return (
    <div className={classname}>
      <button className="profile" onClick={changeVisibility}>
        <div className="data">
          <strong>Esono</strong>
          <small>Director</small>
        </div>
        <img src={profile} />
      </button>
      <div className="sidebar-menu-links">
        <ul className="links-sidebar">
          <li className="pr">
            <FaUserGraduate />
            <a href="">Enrollements</a>
          </li>
          <li>
            <FaChalkboard />
            <a href="">Classrooms</a>
          </li>
          <li>
            <FaChartColumn />
            <a href="">Analytics</a>
          </li>
          <li>
            <FaWallet />
            <a href="">Finances</a>
          </li>
        </ul>
        <button className="logout">cerrar sesion</button>
      </div>
    </div>
  );
}
