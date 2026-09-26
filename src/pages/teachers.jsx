export default function Teachers() {
  const teachers = [
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
  ];
  return (
    <div className="table-container">
      <table>
        <thead className="table-header-group">
          <tr className="table-header-group">
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
  );
}
