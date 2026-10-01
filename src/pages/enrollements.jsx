import { UserPlus } from "lucide-react";

export default function Enrollements() {
  const teachers = [
    {
      id: 2,
      name: "Miguel",
      surename: "Enguru",
      age: 28,
      sex: "M",
      phone: "222567843",
      salary: 35000,
      titulation: "Master",
      residence: "Montecarlos",
    },
    {
      id: 3,
      name: "Ana",
      surename: "Obono",
      age: 20,
      sex: "F",
      phone: "222678943",
      salary: 35000,
      titulation: "Nurse",
      residence: "Alep",
    },
    {
      id: 1,
      name: "Juan",
      surename: "Esono",
      age: 23,
      sex: "M",
      phone: "555408127",
      salary: 35000,
      titulation: "Developper",
      residence: "Bikuy",
    },
    {
      id: 2,
      name: "Miguel",
      surename: "Enguru",
      age: 28,
      sex: "M",
      phone: "222567843",
      salary: 35000,
      titulation: "Master",
      residence: "Montecarlos",
    },
    {
      id: 3,
      name: "Ana",
      surename: "Obono",
      age: 20,
      sex: "F",
      phone: "222678943",
      salary: 35000,
      titulation: "Nurse",
      residence: "Alep",
    },
    {
      id: 1,
      name: "Juan",
      surename: "Esono",
      age: 23,
      sex: "M",
      phone: "555408127",
      salary: 35000,
      titulation: "Developper",
      residence: "Bikuy",
    },
    {
      id: 2,
      name: "Miguel",
      surename: "Enguru",
      age: 28,
      sex: "M",
      phone: "222567843",
      salary: 35000,
      titulation: "Master",
      residence: "Montecarlos",
    },
    {
      id: 3,
      name: "Ana",
      surename: "Obono",
      age: 20,
      sex: "F",
      phone: "222678943",
      salary: 35000,
      titulation: "Nurse",
      residence: "Alep",
    },

    {
      id: 3,
      name: "Ana",
      surename: "Obono",
      age: 20,
      sex: "F",
      phone: "222678943",
      salary: 35000,
      titulation: "Nurse",
      residence: "Alep",
    },
  ];
  return (
    <div className="enrollements">
      <div className="menu-main">
        <div className="menu-main-actions">
          <button>
            <UserPlus></UserPlus>
          </button>
        </div>
        <div className="menu-main-inputs">
          <input type="search" name="" id="" />

          <select name="select" id="select">
            <option value="">All</option>
            <option value="">PI</option>
            <option value="">PII</option>
          </select>
        </div>
      </div>
      <div className="content-main">
        <div className="table-container">
          <table>
            <thead className="table-header-group">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Surename</th>
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
                  <td>{t.id}</td>
                  <td>{t.name}</td>
                  <td>{t.surename}</td>
                  <td className="number">{t.age}</td>
                  <td>{t.sex}</td>
                  <td className="number">{t.phone}</td>
                  <td className="number">{t.salary} Fcfa</td>
                  <td>{t.titulation}</td>
                  <td>{t.residence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
