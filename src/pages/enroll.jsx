import { useApp } from "../contexts/utils";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Save } from "lucide-react";

export default function Enroll() {
  const [category, setCategory] = useState("Ordinary"); // Defaulted to match first select option
  const [grade, setGrade] = useState("");
  const [sex, setSex] = useState("");
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const className = "counter active";

  useEffect(() => {
    const getCourses = async () => {
      try {
        const res = await fetch("http://localhost:3000/courses");
        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.message);
        }
        const result = await res.json();
        setCourses(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCourses();
  }, []);

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
      Sex: sex || "",
      Phone: studentData.Phone || "",
      Residence: studentData.Residence || "",
      Amount: parseFloat(enrollementData.Amount) || 0,
      TypeOf: category,
      CourseID: parseInt(grade, 10) || 0,
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
          errorData.message || `Error en el servidor: ${res.status}`,
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
    <div className="form">
      <div className="step-count">
        <div className={currentStep == 1 ? className : "counter"}></div>
        <div className={currentStep == 2 ? className : "counter"}></div>
        <div className={currentStep == 3 ? className : "counter"}></div>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <div className="form-step">
              <h2>Datos del Estudiante</h2>
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
                  <select
                    className="select"
                    name="student-sex"
                    id="student-sex"
                    onChange={(e) => setSex(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="M">M</option>
                    <option value="F">F</option>
                  </select>
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
              <h2>Detalles de la Matrícula</h2>
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
                  <select
                    className="select"
                    name="TypeOf"
                    id="enrollement-type"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="Ordinary">Ordinary</option>
                    <option value="Extraordinay">Extraordinary</option>
                    <option value="Exonered">Exonered</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="enrollement-course">Course</label>
                  <select
                    className="select"
                    name="course"
                    id="enrollement-course"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                  >
                    {error && <option>{error.message}</option>}
                    <option value=""></option>
                    {courses &&
                      !isLoading &&
                      courses.map((c) => (
                        <option key={c.CourseID} value={c.CourseID}>
                          {c.CourseName}
                        </option>
                      ))}
                  </select>
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
        </form>
        <div className="form-navigation">
          {currentStep > 1 && (
            <button type="button" onClick={prevStep} className="btn-secondary">
              Prev
            </button>
          )}
          {currentStep < 3 ? (
            <button type="button" onClick={nextStep} className="btn-primary">
              Next
            </button>
          ) : (
            <button onClick={handleSubmit} className="btn-primary">
              <div>
                <Save></Save>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
