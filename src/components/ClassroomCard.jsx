import { GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ClassRoom({ data }) {
  const navigate = useNavigate();
  const { ClassroomName, CourseName, FirstName, LastName, Total } = data;

  return (
    <div
      onClick={() => navigate(`/classrooms/${encodeURIComponent(ClassroomName)}`)}
      className="classroom"
      role="link"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          navigate(`/classrooms/${encodeURIComponent(ClassroomName)}`);
        }
      }}
    >
      <div className="classroom-header">
        <div className="classroom-icon"><GraduationCap /></div>
        <div className="classroom-title">{ClassroomName}</div>
      </div>
      <div className="classroom-main">{Total ?? 0}</div>
      <div className="classroom-footer">
        <div className="classroom-course">{CourseName}</div>
        <span>{FirstName} {LastName || ""}</span>
      </div>
    </div>
  );
}
