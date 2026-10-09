import { useApp } from "../contexts/utils";

export default function Enroll() {
  const {
    studentData,
    updateStudentLabel,
    tutorData,
    updateTutorLabel,
    enrollementData,
    updateEnrollementLabel,
    currentStep,
    nextStep,
    prevStep,
  } = useApp();

  // Se transformó la función submit en asíncrona (async) para manejar fetch correctamente
  const submit = async (e) => {
    e.preventDefault();
    const { FirstName, LastName, Age, Sex, Phone, Residence } = studentData;
    const data = { FirstName, LastName, Age, Sex, Phone, Residence };

    try {
      // Se eliminó la función interna anidada para que el try/catch capture los errores correctamente
      const res = await fetch("http://localhost:3000/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Añadido para que el servidor entienda el JSON
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`Error en el servidor: ${res.status}`);
      }

      const result = await res.json(); // Añadido await para resolver la promesa del JSON

      alert("Datos enviados con éxito", result);
      window.location.href = "http://localhost:5173/";
    } catch (error) {
      alert(`Ocurrió un error: ${error.message}`);
    }
  };

  return (
    <div className="form-container">
      <div className="step-indicator">Paso {currentStep} de 3</div>

      <h3>Formulario de Matrícula</h3>

      <form onSubmit={submit}>
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
                  value={studentData.FirstName}
                  onChange={updateStudentLabel}
                />
              </div>

              <div>
                <label htmlFor="student-surename">Last Name</label>
                <input
                  type="text"
                  id="student-surename"
                  name="LastName"
                  value={studentData.LastName}
                  onChange={updateStudentLabel}
                />
              </div>
              <div>
                <label htmlFor="student-age">Age</label>
                <input
                  type="number"
                  id="student-age"
                  name="Age"
                  value={studentData.Age}
                  onChange={updateStudentLabel}
                />
              </div>

              <div>
                <label htmlFor="student-sex">Sex</label>
                <input
                  type="text"
                  id="student-sex"
                  name="Sex"
                  value={studentData.Sex}
                  onChange={updateStudentLabel}
                />
              </div>

              <div>
                <label htmlFor="student-phone">Phone</label>
                <input
                  type="text"
                  id="student-phone"
                  name="Phone"
                  value={studentData.Phone}
                  onChange={updateStudentLabel}
                />
              </div>

              <div>
                <label htmlFor="student-residence">Residence</label>
                <input
                  type="text"
                  id="student-residence"
                  name="Residence"
                  value={studentData.Residence}
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
                  name="FirstName" // Corregido: "Firstname" -> "FirstName" para coincidir con el estado
                  value={tutorData.FirstName}
                  onChange={updateTutorLabel}
                />
              </div>

              <div>
                <label htmlFor="teacher-surename">Last Name</label>
                <input
                  type="text"
                  id="teacher-surename"
                  name="LastName"
                  value={tutorData.LastName}
                  onChange={updateTutorLabel}
                />
              </div>

              <div>
                <label htmlFor="teacher-phone">Phone</label>
                <input
                  type="text"
                  id="teacher-phone"
                  name="Phone"
                  value={tutorData.Phone}
                  onChange={updateTutorLabel}
                />
              </div>

              <div>
                <label htmlFor="teacher-residence">Residence</label>
                <input
                  type="text"
                  id="teacher-residence"
                  name="Residence"
                  value={tutorData.Residence}
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
                  type="text"
                  id="enrollement-amount"
                  name="Amount"
                  value={enrollementData.Amount}
                  onChange={updateEnrollementLabel}
                />
              </div>

              <div>
                <label htmlFor="enrollement-paid">Paid</label>
                <input
                  type="text"
                  id="enrollement-paid"
                  name="Paid"
                  value={enrollementData.Paid}
                  onChange={updateEnrollementLabel}
                />
              </div>

              <div>
                <label htmlFor="enrollement-date">Date</label>
                <input
                  type="date"
                  id="enrollement-date"
                  name="DateOf" // Corregido: "dateof" -> "DateOf" para coincidir con la propiedad del objeto
                  value={enrollementData.DateOf}
                  onChange={updateEnrollementLabel}
                />
              </div>

              <div>
                <label htmlFor="enrollement-observation">Observations</label>
                <input
                  type="text"
                  id="enrollement-observation"
                  name="Observations"
                  value={enrollementData.Observations} // Corregido: .Age -> .Observations
                  onChange={updateEnrollementLabel}
                />
              </div>
            </div>
          </div>
        )}

        {/* Navegación de botones */}
        <div className="form-navigation">
          {currentStep > 1 && (
            <button type="button" className="btn-secondary" onClick={prevStep}>
              Anterior
            </button>
          )}

          {currentStep < 3 && (
            <button type="button" className="btn-primary" onClick={nextStep}>
              Siguiente
            </button>
          )}

          {currentStep === 3 && (
            <button type="submit" className="btn-primary">
              Enviar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
