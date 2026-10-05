import { useApp } from "../contexts/utils";

export default function Enroll() {
  const { datos, updateLabel } = useApp();
  function submit(e) {
    e.preventDefault();
    alert(
      `nombre: ${datos.name}, apellidos: ${datos.surename}, edad: ${datos.age}`,
    );
  }
  return (
    <>
      <h1>formulario de registro</h1>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={datos.name}
            onChange={updateLabel}
          ></input>
        </div>

        <div>
          <label htmlFor="surename">Surename</label>
          <input
            type="text"
            id="surename"
            name="surename"
            value={datos.surename}
            onChange={updateLabel}
          ></input>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={datos.age}
            onChange={updateLabel}
          ></input>
        </div>
        <button type="submit">enviar</button>
      </form>
    </>
  );
}
