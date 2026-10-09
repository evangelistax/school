import { useEffect, useState } from "react";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const getTeachers = async () => {
      const res = await fetch("http://localhost:3000/teachers");
      const result = await res.json();
      setTeachers(result);
    };

    getTeachers();
  }, []);

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
          {teachers.map((t) => (
            <tr>
              <td>{t.ProfessorID}</td>
              <td>{t.FirstName}</td>
              <td>{t.LastName}</td>
              <td className="number">{t.Age}</td>
              <td>{t.Sex}</td>
              <td className="number">{t.Phone}</td>
              <td className="number">{t.Salary} Fcfa</td>
              <td>{t.Titulation}</td>
              <td>{t.Residence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
