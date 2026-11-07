import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, UserPlus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./classroom.css";

const API = "http://localhost:3000";

export default function Classroom() {
  const { id } = useParams();
  const navigate = useNavigate();
  const classroomName = decodeURIComponent(id);
  const [classroom, setClassroom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showAddStudents, setShowAddStudents] = useState(false);
  const [eligibleStudents, setEligibleStudents] = useState([]);
  const [selectedIDs, setSelectedIDs] = useState([]);
  const [loadingEligible, setLoadingEligible] = useState(false);
  const [saving, setSaving] = useState(false);
  const [modalError, setModalError] = useState("");

  const loadClassroom = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `${API}/classrooms/${encodeURIComponent(classroomName)}`,
      );
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "No se pudo cargar el aula.");
      setClassroom(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [classroomName]);

  useEffect(() => {
    loadClassroom();
  }, [loadClassroom]);

  const openAddStudents = async () => {
    setShowAddStudents(true);
    setLoadingEligible(true);
    setModalError("");
    setSelectedIDs([]);
    try {
      const response = await fetch(
        `${API}/classrooms/${encodeURIComponent(classroomName)}/students/eligible`,
      );
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "No se pudieron cargar estudiantes.");
      setEligibleStudents(result);
    } catch (err) {
      setModalError(err.message);
    } finally {
      setLoadingEligible(false);
    }
  };

  const toggleStudent = (studentID) => {
    setSelectedIDs((current) =>
      current.includes(studentID)
        ? current.filter((id) => id !== studentID)
        : [...current, studentID],
    );
  };

  const addStudents = async () => {
    setSaving(true);
    setModalError("");
    try {
      const response = await fetch(
        `${API}/classrooms/${encodeURIComponent(classroomName)}/students`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ StudentIDs: selectedIDs }),
        },
      );
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "No se pudieron añadir estudiantes.");
      setShowAddStudents(false);
      await loadClassroom();
    } catch (err) {
      setModalError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="classroom-state">Cargando aula...</p>;
  if (error) return <p className="classroom-state classroom-error">{error}</p>;
  if (!classroom) return null;

  return (
    <section className="classroom-detail">
      <button className="classroom-back" onClick={() => navigate("/classrooms")}>
        <ArrowLeft size={18} /> Volver a aulas
      </button>
      <header className="classroom-detail-header">
        <div>
          <p className="classroom-eyebrow">Aula</p>
          <h1>{classroom.ClassroomName}</h1>
          <p className="classroom-course-label">Curso: {classroom.CourseName}</p>
        </div>
        <div className="classroom-tutor">
          <span>Profesor tutor</span>
          <strong>{classroom.TutorFirstName} {classroom.TutorLastName || ""}</strong>
        </div>
      </header>

      <div className="classroom-roster-heading">
        <div>
          <h2>Estudiantes</h2>
          <p>{classroom.Students.length} estudiantes asignados a esta aula</p>
        </div>
        <button className="classroom-add-button" onClick={openAddStudents}>
          <UserPlus size={18} /> Añadir estudiantes
        </button>
      </div>

      <div className="classroom-roster-wrap">
        {classroom.Students.length === 0 ? (
          <p className="classroom-empty">Todavía no hay estudiantes en esta aula.</p>
        ) : (
          <table className="classroom-roster">
            <thead>
              <tr><th>ID</th><th>Nombre</th><th>Apellido</th><th>Edad</th><th>Sexo</th><th>Teléfono</th><th>Curso</th></tr>
            </thead>
            <tbody>
              {classroom.Students.map((student) => (
                <tr key={student.StudentID}>
                  <td>{student.StudentID}</td>
                  <td>{student.FirstName}</td>
                  <td>{student.LastName}</td>
                  <td>{student.Age}</td>
                  <td>{student.Sex}</td>
                  <td>{student.Phone}</td>
                  <td>{student.CourseName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {showAddStudents && (
        <div className="classroom-modal-backdrop" role="presentation" onClick={() => setShowAddStudents(false)}>
          <section className="classroom-modal" role="dialog" aria-modal="true" aria-labelledby="add-students-title" onClick={(event) => event.stopPropagation()}>
            <div className="classroom-modal-header">
              <div><h2 id="add-students-title">Añadir estudiantes</h2><p>Solo se muestran estudiantes matriculados en {classroom.CourseName}.</p></div>
              <button className="classroom-close" aria-label="Cerrar" onClick={() => setShowAddStudents(false)}><X size={20} /></button>
            </div>
            {loadingEligible ? <p className="classroom-empty">Cargando estudiantes...</p> : (
              <div className="classroom-eligible-list">
                {eligibleStudents.length === 0 ? <p className="classroom-empty">No hay estudiantes disponibles de este curso.</p> : eligibleStudents.map((student) => (
                  <label className="classroom-eligible-row" key={student.StudentID}>
                    <input type="checkbox" checked={selectedIDs.includes(student.StudentID)} onChange={() => toggleStudent(student.StudentID)} />
                    <span>{student.FirstName} {student.LastName}</span>
                    <small>ID {student.StudentID}{student.Age ? ` · ${student.Age} años` : ""}</small>
                  </label>
                ))}
              </div>
            )}
            {modalError && <p className="classroom-error">{modalError}</p>}
            <div className="classroom-modal-actions">
              <button className="classroom-cancel-button" onClick={() => setShowAddStudents(false)}>Cancelar</button>
              <button className="classroom-add-button" onClick={addStudents} disabled={saving || loadingEligible || selectedIDs.length === 0}>
                {saving ? "Añadiendo..." : `Añadir seleccionados (${selectedIDs.length})`}
              </button>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}
