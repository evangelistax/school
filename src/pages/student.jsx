import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Euro } from "lucide-react";

import profile from "../assets/user.jpeg";
import profile2 from "../assets/user2.jpeg";

export default function Student() {
  /*datos del estado compartido y navegacion*/

  const [step, setStep] = useState(1);
  const className = "step-indicator active ";

  const setCurrentStep = (n) => {
    setStep(n);
  };
  const navigate = useNavigate();
  const { id } = useParams();

  /*estado de las variables*/
  const [data, setData] = useState({});
  const [formData, setFormData] = useState({});

  const [isDisabled, setIsDisabled] = useState(true);
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [course, setCourse] = useState("");
  const [defaultCourse, setDefaultCourse] = useState("");

  const update = async () => {
    const c = getCoureseID(courses, course);

    const CourseID = c.CourseID;

    const data = {
      ...formData,
      CourseID: parseInt(CourseID),
      Paid: parseInt(formData.Paid),
      Age: parseInt(formData.Age),
      Amount: parseInt(formData.Amount),
    };

    try {
      const res = await fetch(`http://localhost:3000/enrollements/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        alert(err.message);
        return;
      }

      const result = await res.json();
      alert(result.message);
      setIsDisabled(true);
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  };

  const cancel = () => {
    setFormData(data);
    setIsDisabled(true);
    setCourse(defaultCourse);
    setCurrentStep(1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  /*efecto para pedir los datos de cursos y del estudiante*/
  useEffect(() => {
    const getData = async () => {
      try {
        const [studentRes, coursesRes] = await Promise.all([
          fetch(`http://localhost:3000/students/${id}`),
          fetch("http://localhost:3000/courses"),
        ]);

        if (!studentRes.ok) {
          const studentErr = await studentRes.json();
          throw new Error(studentErr.message);
        }

        if (!coursesRes.ok) {
          const coursesErr = await coursesRes.json();
          throw new Error(coursesErr.message);
        }

        const [studentResult, coursesResult] = await Promise.all([
          studentRes.json(),
          coursesRes.json(),
        ]);

        setData(studentResult);
        setCourses(coursesResult);
        setFormData(studentResult);
        setCourse(studentResult.CourseName);
        setDefaultCourse(studentResult.CourseName);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [id]);

  const enable = () => {
    setIsDisabled(!isDisabled);
  };

  const deleteStudent = async () => {
    try {
      const res = await fetch(`http://localhost:3000/students/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const errorResult = await res.json();
        throw new Error(
          errorResult.message || "No se pudo eliminar el estudiante",
        );
      }

      const result = await res.json();
      alert(result.message || "Estudiante eliminado con éxito");

      navigate("/enrollements");
    } catch (error) {
      alert("Ocurrió un error al eliminar: " + error.message);
    }
  };

  if (error) return <p>hubo un error: {error.message}</p>;

  const getCoureseID = (courses, selected) => {
    for (let c of courses) {
      if (c.CourseName == selected) {
        return c;
      }
    }
  };

  return (
    <div className="student-card">
      <div className="step-counter">
        {" "}
        <div
          className={step == 1 ? className : "step-indicator"}
          onClick={() => {
            setCurrentStep(1);
          }}
        ></div>
        <div
          className={step == 2 ? className : "step-indicator"}
          onClick={() => {
            setCurrentStep(2);
          }}
        ></div>
        <div
          className={step == 3 ? className : "step-indicator"}
          onClick={() => {
            setCurrentStep(3);
          }}
        ></div>
      </div>

      <div className="card-aside">
        <div className="card-section">
          {formData.Sex == "F" ? (
            <img src={profile2} className="card-img" />
          ) : (
            <img src={profile} className="card-img" />
          )}
        </div>
        <div className="card-section">
          <div className="card-section-menu">
            <span>Payment History</span>
          </div>

          <div className="card-section-data">
            <div className="payment-history-item">
              <div className="payment-history-icon">
                <Euro></Euro>
              </div>
              <div className="payment-history-data">
                <div className="payment-history-msg">Paid: 20000 XAF</div>
                <div className="payment-history-date">
                  {" "}
                  <div className="payment-debit">Debit: 10000 XAF</div>
                  <div className="payment-date"> Today, 11:00 PM</div>
                </div>
              </div>
            </div>

            <div className="payment-history-item">
              <div className="payment-history-icon">
                <Euro></Euro>
              </div>
              <div className="payment-history-data">
                <div className="payment-history-msg">Paid: 5000 XAF</div>
                <div className="payment-history-date">
                  {" "}
                  <div className="payment-debit">Debit: 15000 XAF</div>
                  <div className="payment-date">Today 14:58 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-data">
        <form>
          {step === 1 && (
            <div className="form-step">
              <h2>Datos del Estudiante</h2>
              <div className="grid-layout">
                <div>
                  <label htmlFor="student-name">First Name</label>
                  <input
                    className={isDisabled && "disabled"}
                    disabled={isDisabled}
                    type="text"
                    id="student-name"
                    name="FirstName"
                    value={formData.FirstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="student-surname">Last Name</label>
                  <input
                    type="text"
                    id="student-surname"
                    name="LastName"
                    className={isDisabled && "disabled"}
                    disabled={isDisabled}
                    value={formData.LastName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="student-age">Age</label>
                  <input
                    type="number"
                    id="student-age"
                    name="Age"
                    className={isDisabled && "disabled"}
                    disabled={isDisabled}
                    value={formData.Age}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="student-sex">Sex</label>
                  <select
                    className={isDisabled ? "disabled" : "select"}
                    disabled={isDisabled}
                    name="Sex"
                    id="student-sex"
                    value={formData.Sex}
                    onChange={handleChange}
                  >
                    <option value="F">F</option>
                    <option value="M">M</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="student-phone">Phone</label>
                  <input
                    type="text"
                    id="student-phone"
                    name="Phone"
                    value={formData.Phone}
                    className={isDisabled && "disabled "}
                    disabled={isDisabled}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="student-residence">Residence</label>
                  <input
                    type="text"
                    id="student-residence"
                    name="Residence"
                    value={formData.Residence}
                    className={isDisabled && "disabled"}
                    disabled={isDisabled}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="form-step">
              <h2>Datos del Tutor</h2>
              <div className="grid-layout">
                <div>
                  <label htmlFor="tutor-name">First Name</label>
                  <input
                    type="text"
                    id="tutor-name"
                    name="FirstName"
                    className={isDisabled && "disabled"}
                    disabled={isDisabled}
                  />
                </div>

                <div>
                  <label htmlFor="teacher-surname">Last Name</label>
                  <input
                    type="text"
                    id="teacher-surname"
                    name="LastName"
                    className={isDisabled && "disabled"}
                    disabled={isDisabled}
                  />
                </div>
                <div>
                  <label htmlFor="teacher-phone">Phone</label>
                  <input
                    type="text"
                    id="teacher-phone"
                    name="Phone"
                    className={isDisabled && "disabled"}
                    disabled={isDisabled}
                  />
                </div>
                <div>
                  <label htmlFor="teacher-residence">Residence</label>
                  <input
                    type="text"
                    id="teacher-residence"
                    name="Residence"
                    className={isDisabled && "disabled"}
                    disabled={isDisabled}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Paso 3: Detalles de Matrícula */}
          {step === 3 && (
            <div className="form-step">
              <h2>Detalles de la Matrícula</h2>
              <div className="grid-layout">
                <div>
                  <label htmlFor="enrollement-amount">Amount</label>
                  <input
                    className={isDisabled && "disabled"}
                    disabled={isDisabled}
                    type="number"
                    step="any"
                    id="enrollement-amount"
                    name="Amount"
                    value={formData.Amount}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="enrollement-type">Type</label>
                  <select
                    className={isDisabled ? "disabled" : "select"}
                    disabled={isDisabled}
                    name="TypeOf"
                    id="enrollement-type"
                    value={formData.TypeOf}
                    onChange={handleChange}
                  >
                    <option value="Ordinary">Ordinary</option>
                    <option value="Extraordinay">Extraordinary</option>
                    <option value="Exonered">Exonered</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="enrollement-course">Course</label>
                  <select
                    className={isDisabled ? "disabled" : "select"}
                    disabled={isDisabled}
                    id="enrollement-course"
                    value={course}
                    onChange={(e) => {
                      setCourse(e.target.value);
                    }}
                  >
                    {!isLoading &&
                      courses.map((c) => (
                        <option key={c.CourseID} value={c.CourseName}>
                          {c.CourseName}
                        </option>
                      ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="enrollement-paid">Paid</label>
                  <input
                    className={isDisabled && "disabled"}
                    disabled={isDisabled}
                    type="number"
                    step="any"
                    id="enrollement-paid"
                    name="Paid"
                    value={formData.Paid}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="enrollement-date">Date</label>
                  <input
                    type="date"
                    id="enrollement-date"
                    className={isDisabled && "disabled"}
                    disabled={isDisabled}
                    name="DateOf"
                    value={formData.DateOf}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="enrollement-observations">Observations</label>
                  <input
                    className={isDisabled ? "disabled" : "select"}
                    disabled={isDisabled}
                    type="text"
                    id="enrollement-observations"
                    name="Observations"
                    value={formData.Observations}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          )}
          {step == 4 && (
            <div className="form-step">
              <h2>Historial De Pagos</h2>
              <div className="card-section-data">
                <div className="payment-history-item">
                  <div className="payment-history-icon">
                    <Euro></Euro>
                  </div>
                  <div className="payment-history-data">
                    <div className="payment-history-msg">Paid: 20000 XAF</div>
                    <div className="payment-history-date">
                      {" "}
                      <div className="payment-debit">Debit: 10000 XAF</div>
                      <div className="payment-date"> Today, 11:00 PM</div>
                    </div>
                  </div>
                </div>

                <div className="payment-history-item">
                  <div className="payment-history-icon">
                    <Euro></Euro>
                  </div>
                  <div className="payment-history-data">
                    <div className="payment-history-msg">Paid: 5000 XAF</div>
                    <div className="payment-history-date">
                      {" "}
                      <div className="payment-debit">Debit: 15000 XAF</div>
                      <div className="payment-date">Today 14:58 PM</div>
                    </div>
                  </div>
                </div>

                <div className="update-enrollement">
                  <div className="grid-layout">
                    <div>
                      <label htmlFor="updated-amount">Amount</label>
                      <input type="number" id="updated-amount" name={null} />
                    </div>

                    <div>
                      <label htmlFor="add-payment-date">Date</label>
                      <input type="date" id="add-payment-date" name={null} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>

        <div className="data-actions">
          <div className="card-actions">
            {isDisabled && step != 4 && (
              <>
                <button className="btn-secondary" onClick={enable}>
                  Update{" "}
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => {
                    setCurrentStep(4);
                  }}
                >
                  Add Payment
                </button>
                <button onClick={deleteStudent} className="btn-secondary">
                  Delete
                </button>
              </>
            )}

            {!isDisabled && step != 4 && (
              <>
                <button className="btn-secondary" onClick={cancel}>
                  Cancel
                </button>

                <button onClick={update} className="btn-secondary">
                  Save
                </button>
              </>
            )}

            {step == 4 && (
              <>
                <button className="btn-secondary" onClick={cancel}>
                  Cancel
                </button>{" "}
                <button className="btn-secondary">Save</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
