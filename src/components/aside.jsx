import { useApp } from "../contexts/utils";

///import profile from "../assets/profile.jpg";
export default function Aside() {
  const { isOpen } = useApp();
  const classname = isOpen ? "aside" : "aside collapsed";
  return (
    <div className={classname}>
      <nav className="sidebar-nav"></nav>
    </div>
  );
}
