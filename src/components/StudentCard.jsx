import { useNavigate } from "react-router-dom";

import profile from "../assets/user.jpeg";
import profile2 from "../assets/user2.jpeg";

export default function StudentCard({ data }) {
  const navigate = useNavigate();
  const {
    StudentID,
    Img,
    FirstName,
    LastName,
    Course,
    Age,
    Sex,
    Residence,
    Phone,
  } = data;
  return (
    <div className="cards">
      <div
        className="student"
        onClick={() => navigate(`/student/${StudentID}`)}
      >
        <div className="student-aside">
          {!Img ? (
            Sex === "M" ? (
              <img src={profile} className="student-img" />
            ) : (
              <img src={profile2} className="student-img" />
            )
          ) : (
            <img src={Img} className="student-img" />
          )}

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
