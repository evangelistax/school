import { UserPlus } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Enrollements() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [courses, setCourses] = useState([]);

  const [err, setErr] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCourses = async () => {
      const res = await fetch("http://localhost:3000/courses");
      if (!res.ok) {
        const error = res.json();
        setError(error);
        throw new Error(error.message);
      }

      const result = await res.json();
      setCourses(result);
    };

    try {
      getCourses();
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const getEnrollements = async () => {
      const res = await fetch("http://localhost:3000/enrollements");
      if (!res.ok) {
        const error = res.json();
        setErr(error);
        throw new Error(error.message);
      }

      const result = await res.json();
      setData(result);
    };

    try {
      getEnrollements();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (isLoading) return <p>cargando...</p>;

  if (err) return <p>ERROR: {err.message}</p>;

  return (
    <div className="enrollements">
      <div className="enrollements-menu">
        <div className="enrollements-menu-buttons">
          <NavLink to={"enroll"} className="enroll">
            <UserPlus></UserPlus>
          </NavLink>
        </div>
        <div className="enrollements-menu-inputs">
          <input type="search" name="" id="" placeholder="" />
          <select name="select" id="select">
            {!error &&
              courses.map((c) => (
                <option value={c.CourseName} key={c.CourseID}>
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
                <th>Surename</th>

                <th>Type</th>
                <th>Amount</th>
                <th>Paid</th>
                <th>Debit</th>
                <th>Date</th>
                <th>Observations</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e) => {
                <tr
                  key={e.StudenID}
                  onClick={() => navigate(`/student/${e.StudentID}`)}
                >
                  <td>{e.StudenID}</td>
                  <td>{e.FirstName}</td>
                  <td>{e.LastName}</td>
                  <td>{e.TypeOf}</td>
                  <td>{e.Amount}</td>
                  <td>{e.Paid}</td>
                  <td>{e.Debit}</td>
                  <td>{e.DateOf}</td>
                  <td>{e.Observations}</td>
                </tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
