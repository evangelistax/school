import { useState, useEffect } from "react";

export default function Students() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const res = await fetch("http://localhost:3000/teachers");
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
            <th>Salary</th>
            <th>Titulation</th>
            <th>Residence</th>
          </tr>
        </thead>
        <tbody>
          {data.map((t) => (
            <tr key={t.StudentID}>
              <td>{t.ProfessorID}</td>
              <td>{t.FirstName}</td>
              <td>{t.LastName}</td>
              <td className="number">{t.Age}</td>
              <td>{t.Sex}</td>
              <td className="number">{t.Phone}</td>
              <td>{t.Salary}</td>
              <td>{t.Titulation}</td>
              <td>{t.Residence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
