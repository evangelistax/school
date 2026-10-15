import { useApp } from "../contexts/utils";
import { useNavigate } from "react-router-dom";

export default function Enroll() {
  const navigate = useNavigate();
  const {
    studentData = {},
    updateStudentLabel,
    tutorData = {},
    updateTutorLabel,
    enrollementData = {},
    updateEnrollementLabel,
    currentStep,
    nextStep,
    prevStep,
  } = useApp();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      FirstName: studentData.FirstName || "",
      LastName: studentData.LastName || "",
      Age: parseInt(studentData.Age, 10) || 0,
      Sex: studentData.Sex || "",
      Phone: studentData.Phone || "",
      Residence: studentData.Residence || "",

      Amount: parseFloat(enrollementData.Amount) || 0,
      TypeOf: enrollementData.TypeOf || "",
      Paid: parseFloat(enrollementData.Paid) || 0,
      DateOf: enrollementData.DateOf || "",
      Observations: enrollementData.Observations || "",
    };

    try {
      const res = await fetch("http://localhost:3000/enrollements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(
          errorData.message || `Error en el servidor: \${res.status}`,
        );
      }

      const result = await res.json();
      alert(`Datos enviados con éxito: ${result.message || ""}`);
      navigate("/");
    } catch (error) {
      alert(`Ocurrió un error: ${error.message}`);
    }
  };

  return (
    <div className="form-container">
      <div className="step-indicator">Paso {currentStep} de 3</div>
      <h3>Formulario de Matrícula</h3>
      <form onSubmit={handleSubmit}>
        {/* Paso 1: Datos del estudiante */}
        {currentStep === 1 && (
          <div className="form-step">
            <h2>Datos del estudiante</h2>
            <div className="grid-layout">
              <div>
                <label htmlFor="student-name">First Name</label>
                <input
                  type="text"
                  id="student-name"
                  name="FirstName"
                  value={studentData.FirstName || ""}
                  onChange={updateStudentLabel}
                />
              </div>
              <div>
                <label htmlFor="student-surname">Last Name</label>
                <input
                  type="text"
                  id="student-surname"
                  name="LastName"
                  value={studentData.LastName || ""}
                  onChange={updateStudentLabel}
                />
              </div>
              <div>
                <label htmlFor="student-age">Age</label>
                <input
                  type="number"
                  id="student-age"
                  name="Age"
                  value={studentData.Age || ""}
                  onChange={updateStudentLabel}
                />
              </div>
              <div>
                <label htmlFor="student-sex">Sex</label>
                <input
                  type="text"
                  id="student-sex"
                  name="Sex"
                  value={studentData.Sex || ""}
                  onChange={updateStudentLabel}
                />
              </div>
              <div>
                <label htmlFor="student-phone">Phone</label>
                <input
                  type="text"
                  id="student-phone"
                  name="Phone"
                  value={studentData.Phone || ""}
                  onChange={updateStudentLabel}
                />
              </div>
              <div>
                <label htmlFor="student-residence">Residence</label>
                <input
                  type="text"
                  id="student-residence"
                  name="Residence"
                  value={studentData.Residence || ""}
                  onChange={updateStudentLabel}
                />
              </div>
            </div>
          </div>
        )}

        {/* Paso 2: Datos del Tutor */}
        {currentStep === 2 && (
          <div className="form-step">
            <h2>Datos del Tutor</h2>
            <div className="grid-layout">
              <div>
                <label htmlFor="teacher-name">First Name</label>
                <input
                  type="text"
                  id="teacher-name"
                  name="FirstName"
                  value={tutorData.FirstName || ""}
                  onChange={updateTutorLabel}
                />
              </div>
              <div>
                <label htmlFor="teacher-surname">Last Name</label>
                <input
                  type="text"
                  id="teacher-surname"
                  name="LastName"
                  value={tutorData.LastName || ""}
                  onChange={updateTutorLabel}
                />
              </div>
              <div>
                <label htmlFor="teacher-phone">Phone</label>
                <input
                  type="text"
                  id="teacher-phone"
                  name="Phone"
                  value={tutorData.Phone || ""}
                  onChange={updateTutorLabel}
                />
              </div>
              <div>
                <label htmlFor="teacher-residence">Residence</label>
                <input
                  type="text"
                  id="teacher-residence"
                  name="Residence"
                  value={tutorData.Residence || ""}
                  onChange={updateTutorLabel}
                />
              </div>
            </div>
          </div>
        )}

        {/* Paso 3: Detalles de Matrícula */}
        {currentStep === 3 && (
          <div className="form-step">
            <h2>Detalles de Matrícula</h2>
            <div className="grid-layout">
              <div>
                <label htmlFor="enrollement-amount">Amount</label>
                <input
                  type="number"
                  step="any"
                  id="enrollement-amount"
                  name="Amount"
                  value={enrollementData.Amount || ""}
                  onChange={updateEnrollementLabel}
                />
              </div>
              <div>
                <label htmlFor="enrollement-type">Type</label>
                <input
                  type="text"
                  id="enrollement-type"
                  name="TypeOf"
                  value={enrollementData.TypeOf || ""}
                  onChange={updateEnrollementLabel}
                />
              </div>
              <div>
                <label htmlFor="enrollement-paid">Paid</label>
                <input
                  type="number"
                  step="any"
                  id="enrollement-paid"
                  name="Paid"
                  value={enrollementData.Paid || ""}
                  onChange={updateEnrollementLabel}
                />
              </div>
              <div>
                <label htmlFor="enrollement-date">Date</label>
                <input
                  type="date"
                  id="enrollement-date"
                  name="DateOf"
                  value={enrollementData.DateOf || ""}
                  onChange={updateEnrollementLabel}
                />
              </div>
              <div>
                <label htmlFor="enrollement-observations">Observations</label>
                <input
                  type="text"
                  id="enrollement-observations"
                  name="Observations"
                  value={enrollementData.Observations || ""}
                  onChange={updateEnrollementLabel}
                />
              </div>
            </div>
          </div>
        )}

        {/* Botones de control del flujo por pasos */}
        <div
          className="form-buttons"
          style={{ marginTop: "20px", display: "flex", gap: "10px" }}
        >
          {currentStep > 1 && (
            <button type="button" onClick={prevStep} className="btn-secondary">
              Atrás
            </button>
          )}
          {currentStep < 3 ? (
            <button type="button" onClick={nextStep} className="btn-primary">
              Siguiente`,
            </button>
          ) : (
            <button type="submit" className="btn-primary">
              Enviar Formulario
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
