import { useApp } from "../contexts/utils";
import profile from "../assets/profile.jpg";
export default function Menu() {
  const { isVisible } = useApp();
  const classname = isVisible ? "profile-menu" : "profile-menu collapsed";
  return (
    <div className={classname}>
      <div className="profile-img"></div>
      <img className="profile-img-container" src={profile} />
      <div className="profile-actions">
        <ul>
          <li>cambiar perfil</li>
          <li>mi contrasena</li>
          <li>otros ajustes</li>
          <li>cerrar cesion</li>
        </ul>
      </div>
    </div>
  );
}
