import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import TeachersCard from "../components/TeachersCard";

export default function Students() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mode, setMode] = useState("list");

  const setList = () => {
    setMode("list");
  };
  const setCard = () => {
    setMode("card");
  };

  useEffect(() => {
    const getTeachers = async () => {
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
    getTeachers();
  }, []);

  return (
    <div className="table-container">
      <div className="students-menu">
        <button onClick={setList}>List</button>
        <button onClick={setCard}>Card</button>
        <div className="query-element">
          <input id="name" type="search" />
        </div>
        <div className="search-icon">
          <Search></Search>
        </div>
      </div>

      {mode == "card" && (
        <div className="students-cards-container">
          {data.map((t) => (
            <TeachersCard
              key={t.ProfessorID}
              data={{
                ProfessorID: t.ProfessorID,
                FirstName: t.FirstName,
                LastName: t.LastName,
                Salary: t.Salary,
                Titulation: t.Titulation,
                Sex: t.Sex,
                Phone: t.Phone,
                Residence: t.Residence,
              }}
            />
          ))}
        </div>
      )}
      {mode == "list" && (
        <div className="table-element">
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
                data.map((t) => (
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
      )}
    </div>
  );
}
