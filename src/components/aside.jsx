export default function Aside({ status }) {
  const classname = status ? "aside" : "aside collapsed";
  return (
    <aside className={classname}>
      <div className="profile">
        <div className="data">
          <strong>Esono</strong>
          <small>Director</small>
        </div>
        <img src="" />
      </div>
    </aside>
  );
}
