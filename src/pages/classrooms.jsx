import ClassRoom from "../components/ClassroomCard";
import { useState, useEffect } from "react";

export default function Classrooms() {
  const [classrooms, setClassrooms] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    async function get() {
      try {
        const data = await fetch("http://localhost:3000/classrooms");
        if (!data.ok) {
          const err = await data.json();
          throw new Error(err.message);
        }
        setClassrooms(await data.json());
      } catch (error) {
        setErr(error);
      } finally {
        setIsloading(false);
      }
    }
    get();
  }, []);
  return (
    <div className="classroom-container">
      {isLoading && <p>cargando...</p>}
      {!isLoading && err && <p>{err.message}</p>}
      {!isLoading && !err && classrooms.map((classroom) => (
        <ClassRoom key={classroom.ClassroomName} data={classroom} />
      ))}
    </div>
  );
}
