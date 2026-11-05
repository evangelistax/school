import { useNavigate } from "react-router-dom";

export default function StudentCard({ data }) {
  const navigate = useNavigate();
  const { StudentID, FirstName, LastName, Course, Age, Sex, Residence, Phone } =
    data;
  return (
    <div className="cards">
      <div
        className="student"
        onClick={() => navigate(`/student/${StudentID}`)}
      >
        <div className="student-aside">
          <img src={null} className="student-img" />
          <div className="student-id">{StudentID}</div>
        </div>
        <div className="student-main">
          <div className="student-item">
            <span className="item-title">First Name</span>
            <span className="item-data">{FirstName}</span>
          </div>
          <div className="student-item">
            <span className="item-title">Last Name</span>
            <span className="item-data">{LastName}</span>
          </div>
          <div className="student-item-age">
            <div className="student-item">
              <span className="item-title">Course</span>
              <span className="item-data">{Course}</span>
            </div>
            <div className="student-item">
              <span className="item-title">Age</span>
              <span className="item-data">{Age}</span>
            </div>
            <div className="student-item">
              <span className="item-title">Sex</span>
              <span className="item-data">{Sex}</span>
            </div>
          </div>
          <div className="student-item-age">
            <div className="student-item">
              <span className="item-title">Residence</span>
              <span className="item-data course">{Residence}</span>
            </div>
            <div className="student-item">
              <span className="item-title phone">Phone</span>
              <span className="item-data">{Phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
