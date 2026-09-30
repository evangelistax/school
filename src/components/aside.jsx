import { useApp } from "../contexts/utils";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  School,
  Building2,
  Bell,
  HelpCircle,
  Settings,
  LogOut,
  Wallet,
  FileSpreadsheet,
  BookOpen,
  ChartPie,
} from "lucide-react";

import profile from "../assets/profile.jpg";
export default function Aside() {
  const { isOpen } = useApp();
  const classname = isOpen ? "aside" : "aside collapsed";
  return (
    <div className={classname}>
      <div className="sidebar-menu">
        <div className="sidebar-footer">
          <div className="user-card">
            <img src={profile} alt="user" />
            <div className="user-info">
              <strong>Evangelista</strong>
              <span>Director</span>
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <NavLink to={"dashboard"} className="nav-item">
            <LayoutDashboard /> <span>Dashboard</span>
          </NavLink>
          <NavLink to={"enrollements"} className="nav-item">
            <Users /> <span>Enrollements</span>
          </NavLink>
          <NavLink className="nav-item">
            <School /> <span>Classrooms</span>
          </NavLink>
          <a className="nav-item">
            <BookOpen /> <span>Curriculum</span>
          </a>
          <a className="nav-item">
            <FileSpreadsheet /> <span>Grades</span>
          </a>
          <a className="nav-item">
            <ChartPie /> <span>Analytics</span>
          </a>
          <a className="nav-item">
            <Wallet /> <span>Finances</span>
          </a>
          <a className="nav-item">
            <Building2 /> <span>School Details</span>
          </a>
        </nav>
      </div>

      <nav className="sidebar-settings">
        <div className="divider" />

        <a className="nav-item">
          <Bell /> <span>Notifications</span>
        </a>
        <a className="nav-item">
          <HelpCircle /> <span>Help</span>
        </a>
        <a className="nav-item">
          <Settings /> <span>Settings</span>
        </a>
        <a className="nav-item">
          <LogOut /> <span>Log Out</span>
        </a>
      </nav>
    </div>
  );
}
