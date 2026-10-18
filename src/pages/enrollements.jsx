import { UserPlus } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Enrollements() {
  const search = async (name, type, course) => {
    setError(null);
    setIsLoading(true);
    let url = "http://localhost:3000/enrollements";
    const p = [];
    const u = [];
    if (name) {
      p.push(name);
      u.push(`name=${name}`);
    }
    if (type) {
      p.push(type);
      u.push(`type=${type}`);
    }
    if (course) {
      p.push(course);
      u.push(`course=${course}`);
    }

    if (p.length > 0) {
      url += "?" + u.join("&");
    }

    try {
      const res = await fetch(url);
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
      }

      const result = await res.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [type, setType] = useState("");
  const [course, setCourse] = useState("");
  const [name, setName] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

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

  return (
    <div className="enrollements">
      <div className="enrollements-menu">
        <div className="enrollements-menu-buttons">
          <NavLink to="enroll" className="enroll">
            <UserPlus />
          </NavLink>
        </div>
        <div className="enrollements-menu-inputs">
          <div className="query-element">
            <label htmlFor="name">
              <p>Name</p>{" "}
            </label>
            <input id="name" type="search" onChange={updateName} />
          </div>
          <div className="query-element">
            <label htmlFor="type">
              <p>Type</p>
            </label>
            <select
              name=""
              id="type"
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              <option value="">All</option>
              <option value="Ordinary">Ordinary</option>
              <option value="Extraordinary">Extraordinary</option>
              <option value="Exonered">Exonered</option>
            </select>
          </div>
          <div className="query-element">
            <label htmlFor="course">
              <p>Course</p>
            </label>
            <select
              name="select"
              id="course"
              onChange={(e) => {
                setCourse(e.target.value);
              }}
            >
              <option value="">All</option>
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

            <button
              className="filter"
              onClick={(e) => {
                e.preventDefault;
                search(name, type, course);
              }}
            >
              <p>filter</p>
            </button>
          </div>
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
                <th>Course</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Paid</th>
                <th>Debit</th>
                <th>Date</th>
                <th>Observations</th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  <td
                    colSpan={9}
                    style={{ textAlign: "center", padding: "20px" }}
                  >
                    cargando...
                  </td>
                </tr>
              )}
              {!isLoading &&
                !error &&
                data.map((e) => (
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
                    <td>{e.CourseName}</td>
                    <td>{e.TypeOf}</td>
                    <td className="number">{e.Amount}</td>
                    <td className="number">{e.Paid}</td>
                    <td className="number">{e.Debit}</td>
                    <td>{e.DateOf}</td>
                    <td>{e.Observations}</td>
                  </tr>
                ))}
              {data.length === 0 && !error && !isLoading && (
                <tr>
                  <td
                    colSpan={9}
                    style={{ textAlign: "center", padding: "20px" }}
                  >
                    No hay matrículas registradas.
                  </td>
                </tr>
              )}

              {error && (
                <tr>
                  <td
                    colSpan={9}
                    style={{ textAlign: "center", padding: "20px" }}
                  >
                    {error}
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
