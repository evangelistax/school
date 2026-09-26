export default function Students() {
  const students = [
    {
      id: 1,
      name: "Juan",
      surename: "Esono",
      age: 23,
      grade: "4º",
      sex: "M",
      phone: "555408127",

      residence: "Bikuy",
    },
    {
      id: 2,
      name: "Miguel",
      surename: "Enguru",
      age: 28,
      grade: "3º",
      sex: "M",
      phone: "222567843",

      residence: "Montecarlos",
    },
    {
      id: 3,
      name: "Ana",
      surename: "Obono",
      age: 20,
      grade: "2º",
      sex: "F",
      phone: "222678943",

      residence: "Alep",
    },
  ];
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surename</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Sex</th>
            <th>Residence</th>
          </tr>
        </thead>
        <tbody id="cuerpo-tabla">
          {students.map((s) => (
            <tr>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.surename}</td>
              <td>{s.age}</td>
              <td>{s.grade}</td>
              <td>{s.sex}</td>
              <td>{s.residence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
