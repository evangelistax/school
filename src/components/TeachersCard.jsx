import profile from "../assets/user.jpeg";
import profile2 from "../assets/user2.jpeg";

export default function TeachersCard({ data }) {
  const {
    FirstName,
    Img,
    LastName,
    Titulation,
    Salary,
    ProfessorID,
    Phone,
    Residence,
    Sex,
  } = data;
  return (
    <div className="cards">
      <div className="student">
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
          <div className="student-id">{ProfessorID}</div>
        </div>

        <div className="student-main">
          <div className="student-item">
            <span className="item-title">First Name</span>
            <span className="item-data">{FirstName || ""}</span>
          </div>
          <div className="student-item">
            <span className="item-title">Last Name</span>
            <span className="item-data">{LastName || ""}</span>
          </div>
          <div className="student-item-age">
            <div className="student-item">
              <span className="item-title">Titulation</span>
              <span className="item-data">{Titulation || ""}</span>
            </div>
            <div className="student-item">
              <span className="item-title">Salary</span>
              <span className="item-data">{Salary || ""}</span>
            </div>
            <div className="student-item">
              <span className="item-title">Sex</span>
              <span className="item-data">{Sex || ""}</span>
            </div>
          </div>
          <div className="student-item-age">
            <div className="student-item">
              <span className="item-title">Residence</span>
              <span className="item-data course">{Residence || ""}</span>
            </div>
            <div className="student-item">
              <span className="item-title phone">Phone</span>
              <span className="item-data">{Phone || ""}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
