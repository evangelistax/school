import useNotifications from "../stores/notificationStore";
import { User, Trash, Euro } from "lucide-react";
export default function Notifications() {
  const isActive = useNotifications((state) => state.open);
  const classname = isActive ? "notifications " : "notifications collapsed";
  return (
    <aside className={classname}>
      <div className="activities">
        <span>Notifications</span>
        <div className="activities-items">
          <div className="activity-item">
            <div className="activity-icon">
              <Trash></Trash>
            </div>
            <div className="activity-info">
              <div className="activity-msg">User Deleted</div>
              <div className="activity-data">Today, 11:59 PM</div>
            </div>
          </div>

          <div className="activity-item">
            <div className="activity-icon">
              <Euro></Euro>
            </div>
            <div className="activity-info">
              <div className="activity-msg">Updated Payment</div>
              <div className="activity-data">Yesterday, 11:59 PM</div>
            </div>
          </div>

          <div className="activity-item">
            <div className="activity-icon">
              <User></User>
            </div>
            <div className="activity-info">
              <div className="activity-msg">New Enrollement</div>
              <div className="activity-data">48 minutes ago</div>
            </div>
          </div>
        </div>
      </div>
      <div className="users"></div>
    </aside>
  );
}
