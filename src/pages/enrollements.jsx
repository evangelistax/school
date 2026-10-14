import { UserPlus } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Enrollements() {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const [coursesRes, enrollRes] = await Promise.all([
          fetch("http://localhost:3000/courses"),
          fetch("http://localhost:3000/enrollements"),
        ]);

        if (!coursesRes.ok) {
          const errData = await coursesRes.json().catch(() => ({}));
          throw new Error(
            errData.message || `Courses error: ${coursesRes.status}`,
          );
        }
        if (!enrollRes.ok) {
          const errData = await enrollRes.json().catch(() => ({}));
          throw new Error(
            errData.message || `Enrollments error: ${enrollRes.status}`,
          );
        }

        const [coursesResult, enrollResult] = await Promise.all([
          coursesRes.json(),
          enrollRes.json(),
        ]);

        setCourses(coursesResult);
        setData(enrollResult);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>ERROR: {error}</p>;

  return (
    <div className="enrollements">
      <div className="enrollements-menu">
        <div className="enrollements-menu-buttons">
          <NavLink to="enroll" className="enroll">
            <UserPlus />
          </NavLink>
        </div>
        <div className="enrollements-menu-inputs">
          <input type="search" />
          <select name="select" id="select">
            <option value="" disabled></option>
            {courses.map((c) => (
              // Adjust fallback properties depending on your actual API response keys
              <option
                value={c.CourseName}
                key={c.CourseID || c.id || c.CourseName}
              >
                {c.CourseName}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="enrollements-content">
        <div className="table-container">
          <table>
            <thead className="table-header-group">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Paid</th>
                <th>Debit</th>
                <th>Date</th>
                <th>Observations</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e) => (
                <tr
                  key={e.StudentID || e.id || e.StudenID}
                  onClick={() =>
                    navigate(`/student/${e.StudentID || e.id || e.StudenID}`)
                  }
                  style={{ cursor: "pointer" }}
                >
                  <td>{e.StudentID || e.StudenID}</td>
                  <td>{e.FirstName}</td>
                  <td>{e.LastName}</td>
                  <td>{e.TypeOf}</td>
                  <td>{e.Amount}</td>
                  <td>{e.Paid}</td>
                  <td>{e.Debit}</td>
                  <td>{e.DateOf}</td>
                  <td>{e.Observations}</td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td
                    colSpan={9}
                    style={{ textAlign: "center", padding: "20px" }}
                  >
                    No hay matrículas registradas.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
