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

  const submit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <div className="form-container">
      <div className="step-indicator">Paso {currentStep} de 3</div>

      <h3>Formulario de Matrícula</h3>

      <form onSubmit={submit}>
        {/* 2. Renderizado Condicional: Paso 1 */}
        {currentStep === 1 && (
          <div className="form-step">
            <h2>Datos del estudiante</h2>
            <div className="grid-layout">
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
              {/* ... resto de inputs de estudiante ... */}
            </div>
          </div>
        )}

        {/* 2. Renderizado Condicional: Paso 2 */}
        {currentStep === 2 && (
          <div className="form-step">
            <h2>Datos del Tutor</h2>
            <div className="grid-layout">
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
          </div>
        )}

        {/* 2. Renderizado Condicional: Paso 3 */}
        {currentStep === 3 && (
          <div className="form-step">
            <h2>Detalles de Matrícula</h2>
            <div className="grid-layout">
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
          </div>
        )}

        {/* 3. Navegación de botones dinámicos */}
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
