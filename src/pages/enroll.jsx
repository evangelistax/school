import { useApp } from "../contexts/utils";

export default function Enroll() {
  const {
    studentData,
    updateStudentLabel,
    tutorData,
    updateTutorLabel,
    enrollementData,
    updateEnrollementLabel,
  } = useApp();
  function submit(e) {
    e.preventDefault();
    alert(
      `estudiante: ${studentData}, tutor: ${tutorData}, matricula: ${enrollementData}`,
    );
  }
  return (
    <div className="form-container">
      <h1>formulario de registro</h1>
      <form onSubmit={submit}>
        <div className="student-data">
          <h2>Datos del estudiante: </h2>
          <div>
            <label htmlFor="student-name">First Name</label>
            <input
              type="text"
              id="student-name"
              name="firstname"
              value={studentData.firstname}
              onChange={updateStudentLabel}
            ></input>
          </div>

          <div>
            <label htmlFor="student-surename">Last Name</label>
            <input
              type="text"
              id="student-surename"
              name="surename"
              value={studentData.surename}
              onChange={updateStudentLabel}
            ></input>
          </div>
          <div>
            <label htmlFor="student-age">Age</label>
            <input
              type="number"
              id="student-age"
              name="age"
              value={studentData.age}
              onChange={updateStudentLabel}
            ></input>
          </div>

          <div>
            <label htmlFor="student-sex">Sex</label>
            <input
              type="text"
              id="student-sex"
              name="sex"
              value={studentData.sex}
              onChange={updateStudentLabel}
            ></input>
          </div>

          <div>
            <label htmlFor="student-phone">Phone</label>
            <input
              type="text"
              id="student-phone"
              name="phone"
              value={studentData.phone}
              onChange={updateStudentLabel}
            ></input>
          </div>

          <div>
            <label htmlFor="student-residence">Residence</label>
            <input
              type="text"
              id="student-residence"
              name="residence"
              value={studentData.residence}
              onChange={updateStudentLabel}
            ></input>
          </div>
        </div>
        <div className="teacher-data">
          <h2>Datos del Tutor: </h2>
          <div>
            <label htmlFor="teacher-name">First Name</label>
            <input
              type="text"
              id="teacher-name"
              name="firstname"
              value={tutorData.firstname}
              onChange={updateTutorLabel}
            ></input>
          </div>

          <div>
            <label htmlFor="teacher-surename">Last Name</label>
            <input
              type="text"
              id="teacher-surename"
              name="surename"
              value={tutorData.surename}
              onChange={updateTutorLabel}
            ></input>
          </div>

          <div>
            <label htmlFor="teacher-phone">Phone</label>
            <input
              type="text"
              id="teacher-phone"
              name="phone"
              value={tutorData.phone}
              onChange={updateTutorLabel}
            ></input>
          </div>

          <div>
            <label htmlFor="teacher-residence">Residence</label>
            <input
              type="text"
              id="teacher-residence"
              name="residence"
              value={tutorData.residence}
              onChange={updateTutorLabel}
            ></input>
          </div>
        </div>
        <div className="enrollement-data">
          <h2>Detalles de Matricula: </h2>
          <div>
            <label htmlFor="enrollement-amount">Amount</label>
            <input
              type="text"
              id="enrollement-amount"
              name="amount"
              value={enrollementData.amount}
              onChange={updateEnrollementLabel}
            ></input>
          </div>

          <div>
            <label htmlFor="enrollement-paid">Paid</label>
            <input
              type="text"
              id="enrollement-paid"
              name="paid"
              value={enrollementData.paid}
              onChange={updateEnrollementLabel}
            ></input>
          </div>

          <div>
            <label htmlFor="dateof">Date</label>
            <input
              type="date"
              id="dateof"
              name="dateof"
              value={enrollementData.dateof}
              onChange={updateEnrollementLabel}
            ></input>
          </div>

          <div>
            <label htmlFor="enrollement-observation">Observatios</label>
            <input
              type="text"
              id="enrollement-observation"
              name="observations"
              value={enrollementData.age}
              onChange={updateEnrollementLabel}
            ></input>
          </div>
        </div>
        <button type="submit">enviar</button>
      </form>
    </div>
  );
}
