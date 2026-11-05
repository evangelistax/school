import { GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ClassRoom({ data }) {
  const navigate = useNavigate();
  const { ClassroomName, CourseName, FirstName, Total } = data;

  return (
    <div
      onClick={() => navigate(`/classrooms/${ClassroomName}`)}
      className="classroom"
    >
      <div className="classroom-header">
        <div className="classroom-icon">
          <GraduationCap></GraduationCap>
        </div>
        <div className="classroom-title">{ClassroomName}</div>
      </div>
      <div className="classroom-main">{Total}</div>
      <div className="classroom-footer">
        {" "}
        <div className="classroom-course">{CourseName}</div>
        <span> {FirstName}</span>{" "}
      </div>
    </div>
  );
}
