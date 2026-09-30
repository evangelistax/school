import Icons from "./icons";
import { useApp } from "../contexts/utils";
import { LuPanelLeft, LuPanelRight } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Header() {
  const { isOpen, handleClick } = useApp();
  const content = isOpen ? (
    <LuPanelLeft className="botones" />
  ) : (
    <LuPanelRight className="botones" />
  );

  return (
    <header className="header">
      <nav>
        <div className="header-actions">
          <button className="collapse-botton" onClick={handleClick}>
            {content}
          </button>
          <ul>
            <li>
              <Link to="/analytics" className="link">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/settings" className="link">
                Settings
              </Link>
            </li>
          </ul>
        </div>

        <div className="buttons">
          <input type="search" name="search" id="search" />
          <Icons></Icons>
        </div>
      </nav>
      <div className="overview">
        <h3>Overview</h3>

        <select name="select" id="select">
          <option value="">2026</option>
          <option value="">2025</option>
          <option value="">2024</option>
        </select>
      </div>
      <div className="links-containers">
        <div className="links-items">
          <Link to="/" className="link">
            Students
          </Link>
        </div>
        <div className="links-items">
          <Link to="/teachers" className="link">
            Teachers
          </Link>
        </div>
        <div className="links-items">
          <Link to="/reports" className="link">
            Calendar
          </Link>
        </div>
        <div className="links-items">
          <Link to="/analytics" className="link">
            Analytics
          </Link>
        </div>
      </div>
    </header>
  );
}
