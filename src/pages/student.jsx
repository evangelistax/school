import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Student() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const { id } = useParams();

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

      navigate("/");
    } catch (error) {
      alert("Ocurrió un error al eliminar: " + error.message);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/students/${id}`);
        if (!res.ok) {
          const errorResult = await res.json();
          throw new Error(errorResult.message || "Error al obtener los datos");
        }

        // 2. Si está bien, procesamos el JSON
        const studentData = await res.json();
        setData(studentData);
      } catch (error) {
        alert("Ocurrió un error al cargar los datos: " + error.message);
      }
    };

    if (id) {
      getData();
    }
  }, [id]); // 3. Se añade el array de dependencias para evitar bucles infinitos

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <p>
        <strong>Datos del estudiante</strong>
      </p>
      <span>Nombre: {data.FirstName || "Cargando..."}</span>
      <span>Apellido: {data.LastName}</span>
      <span>Edad: {data.Age}</span>
      <span>Teléfono: {data.Phone}</span>

      <p>
        <strong>Acciones</strong>
      </p>
      <div>
        <button onClick={() => alert(`Actualizar estudiante con id: ${id}`)}>
          Actualizar
        </button>
        <button onClick={deleteStudent} style={{ marginLeft: "10px" }}>
          Eliminar
        </button>
      </div>
    </div>
  );
}
