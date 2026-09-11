import Icons from "./icons";
export default function Header({ toggle }) {
  return (
    <header className="header">
      <nav>
        <aside>
          <ul>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Settings</a>
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
        <div className="links-items">Students</div>
        <div className="links-items">Teachers</div>
        <div className="links-items">Reports</div>
        <div className="links-items">Analitycs</div>
      </div>
    </header>
  );
}
