import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Students() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (isLoading) return <p>cargando datos...</p>;
  if (error) return <p>ERROR: {error.message}</p>;

  return (
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
          {data.length === 0 && (
            <tr>
              <td colSpan={9} style={{ textAlign: "center", padding: "20px" }}>
                No hay estudiantes registrados.
              </td>
            </tr>
          )}
          {data.map((s) => (
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
  );
}
