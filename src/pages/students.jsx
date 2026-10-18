import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export default function Students() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const search = async () => {
    setError(null);
    setIsLoading(true);
    const url = `http://localhost:3000/students?name=${name}`;

    try {
      const res = await fetch(url);
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
      }
      const result = await res.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const getStudents = async () => {
      try {
        const res = await fetch("http://localhost:3000/students");
        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.message);
        }

        const result = await res.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getStudents();
  }, []);

  return (
    <div className="students-content">
      <div className="students-menu">
        <div className="query-element">
          <input id="name" type="search" onChange={updateName} />
        </div>
        <div className="icons">
          <Search onClick={search}></Search>
        </div>
      </div>
      <div className="students-data">
        <div className="table-container">
          <table>
            <thead className="table-header-group">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Age</th>
                <th>Sex</th>
                <th>Phone</th>

                <th>Residence</th>
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
              {data.length === 0 && !error && !isLoading && (
                <tr>
                  <td
                    colSpan={9}
                    style={{ textAlign: "center", padding: "20px" }}
                  >
                    No hay estudiantes registrados.
                  </td>
                </tr>
              )}
              {error && (
                <tr>
                  <td
                    colSpan={9}
                    style={{ textAlign: "center", padding: "20px" }}
                  >
                    {error.message}
                  </td>
                </tr>
              )}

              {!isLoading &&
                !error &&
                data.map((s) => (
                  <tr
                    key={s.StudentID}
                    onClick={() => navigate(`/student/${s.StudentID}`)}
                  >
                    <td>{s.StudentID}</td>
                    <td>{s.FirstName}</td>
                    <td>{s.LastName}</td>
                    <td className="number">{s.Age}</td>
                    <td>{s.Sex}</td>
                    <td className="number">{s.Phone}</td>
                    <td>{s.Residence}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
