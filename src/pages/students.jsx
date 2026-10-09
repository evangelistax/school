import { useEffect } from "react";
import { useState } from "react";

export default function Students() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getStudents() {
      try {
        const res = await fetch("http://localhost:3000/students");
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error(err.message);
      }
    }
    getStudents();
  }, []);
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Sex</th>
            <th>Residence</th>
          </tr>
        </thead>

        <tbody id="cuerpo-tabla">
          {data.map((s) => (
            <tr>
              <td>{s.StudentID}</td>
              <td>{s.FirstName}</td>
              <td>{s.LastName}</td>
              <td>{s.Age}</td>
              <td>{s.Phone}</td>
              <td>{s.Sex}</td>
              <td>{s.Residence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
