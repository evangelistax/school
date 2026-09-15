import { useApp } from "../contexts/utils";
export default function Aside() {
  const { isOpen } = useApp;
  const classname = isOpen ? "aside" : "aside collapsed";
  return (
    <aside className={classname}>
      <div className="profile">
        <div className="data">
          <strong>Esono</strong>
          <small>Director</small>
        </div>
        <img src={null} />
      </div>
    </aside>
  );
}
