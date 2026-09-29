import { useApp } from "../contexts/utils";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  FileText,
  Globe,
  HeartHandshake,
  Building2,
  Bell,
  HelpCircle,
  Settings,
  LogOut,
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
          <a className="nav-item">
            <LayoutDashboard /> <span>Dashboard</span>
          </a>
          <a className="nav-item">
            <Users /> <span>Employees</span>
          </a>
          <a className="nav-item">
            <UserPlus /> <span>New Employee</span>
          </a>
          <a className="nav-item">
            <FileText /> <span>Contracts</span>
          </a>
          <a className="nav-item">
            <Globe /> <span>Global Payroll</span>
          </a>
          <a className="nav-item">
            <HeartHandshake /> <span>Benefits</span>
          </a>
          <a className="nav-item">
            <Building2 /> <span>Company Details</span>
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
