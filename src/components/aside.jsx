import { useApp } from "../contexts/utils";
import profile from "../assets/profile.jpg";
export default function Aside() {
  const { isOpen, changeVisibility } = useApp();
  const classname = isOpen ? "aside" : "aside collapsed";
  return (
    <button className={classname} onClick={changeVisibility}>
      <div className="profile">
        <div className="data">
          <strong>Esono</strong>
          <small>Director</small>
        </div>
        <img src={profile} />
      </div>
    </button>
  );
}
