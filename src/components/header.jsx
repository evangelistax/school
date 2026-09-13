import Icons from "./icons";
import { Link } from "react-router-dom";
export default function Header({ toggle }) {
  return (
    <header className="header">
      <nav>
        <aside>
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
        </aside>
        <div className="buttons">
          <input type="search" name="search" id="search" />
          <Icons toggle={toggle}></Icons>
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
            Reports
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
